import * as fs from "fs";
import * as path from "path";
import { ISupportedInputType, ISupportedLanguages } from "../types/index.types";

export class LocalTranslation {
  private translations: any = {};

  constructor(
    public type: ISupportedInputType = "string",
    public language: ISupportedLanguages = "en"
  ) {
    this.loadTranslations();
  }

  // Load both general and specific translations based on language
  private loadTranslations() {
    try {
      const generalPath = path.join(
        __dirname,
        `../locales/${this.language}/${this.type}.json`
      );

      const generalTranslations = JSON.parse(
        fs.readFileSync(generalPath, "utf8")
      );

      // Merge both general and specific translations
      this.translations = generalTranslations;
    } catch (error) {
      console.error("Error loading translation files:", error);
    }
  }

  // Fetch the translated message by key
  public t(key: string): string {
    return this.translations[key] || key; // Return key if no translation is found
  }
}
