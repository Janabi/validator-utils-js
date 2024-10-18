// import i18next from "i18next";
// import Backend from "i18next-fs-backend";

// import { ISupportedInputType, ISupportedLanguages } from "../types/index.types";

// // Initialize i18next with a dynamic path for each translation type
// i18next.use(Backend).init(
//   {
//     fallbackLng: "en", // Fallback to English
//     lng: "en", // Default language
//     backend: {
//       // Dynamically load translation files based on type (e.g., number, date, etc.)
//       loadPath: (
//         lng: ISupportedLanguages = "en",
//         namespace: ISupportedInputType = "string"
//       ) => `./src/locales/${lng}/${namespace}.json`,
//     },
//     supportedLngs: ["en"], // Define supported languages
//     // Custom option to use in the 'loadPath'
//     interpolation: {
//       escapeValue: false, // Disable HTML escaping for this example
//     },
//   },
//   (err, t) => {
//     if (err) return console.error(err);
//   }
// );

// // Function to change language and load the correct translation type (e.g., number, date, etc.)
// export const loadTranslation = (
//   type: ISupportedInputType,
//   language: ISupportedLanguages = "en"
// ) => {
//   // Set the current language
//   i18next.changeLanguage(language, (err, t) => {
//     if (err) return console.error(err);

//     // Load the specific translation file based on type
//     i18next.loadNamespaces(type, (err, t) => {
//       if (err) return console.error(err);
//       console.log(t("INVALID_NUMBER")); // Translated value for the 'number' type
//     });
//   });
// };

// export const t = (message: string) => i18next.t(message);
