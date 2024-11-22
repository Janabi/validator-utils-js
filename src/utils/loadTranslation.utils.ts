import {
  ISupportedInputType,
  ISupportedLanguages,
  IOptionAttributes,
} from "../types/index.types";
import { locales } from "../locales";

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
      const generalTranslations = locales[this.language][this.type];

      // Merge both general and specific translations
      this.translations = generalTranslations;
    } catch (error) {
      console.error("Error loading translation files:", error);
    }
  }

  // Fetch the translated message by key
  public t(key: string, keyName: string, attr?: IOptionAttributes): string {
    // Get the translation string or fallback to the key if not found
    let message = this.translations[key] || key;

    // replace the data for the input that applies validation on
    message = message.replace(/{(\w+)}/g, keyName);

    // If there are attributes, replace placeholders in the message
    if (attr) {
      message = message.replace(
        /{(\w+)}/g,
        (_: string, placeholder: string) => {
          return attr[placeholder] !== undefined
            ? String(attr[placeholder])
            : `{${placeholder}}`;
        }
      );
    }

    return message;
  }
}
