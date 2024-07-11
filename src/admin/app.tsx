import AuthLogo from "./extensions/cdm_logo.png";
import Favicon from "./extensions/cdm_logo.ico";

export default {
  config: {
    auth:{
      logo: AuthLogo
    },
    head: {
      favicon: Favicon,
    },
    theme: {
      colors: {
        primary100: "#cdd9cc",
        primary200: "#b5c7b4",
        primary500: "#6e916d",
        primary600: "#295e29",
        primary700: "#0b4d10",
        danger700: "#e23a2d",
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "CDM CMS",
  
        // "app.components.LeftMenu.navbrand.workplace": "Testing",
  
        "Auth.form.welcome.title": "Welcom to CDM CMS",
  
        "Auth.form.welcome.subtitle": "Login to your account",
  
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you.",
      },
    },
    tutorials: false,
    notification: { release: false},
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: any) {
    console.log(app);
  },
};
