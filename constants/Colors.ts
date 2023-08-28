const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const COLORS = {
  Light: {
    background: "#fff",
    colorOne: "#0898A0",
    colorTwo: "#0898A0",
    colorThree: "#E0457B",
    colorFour: "#000",
    colorFive: "#8B9EAB",
    colorSix: "#94A1AD",
    colorSeven: "rgba(113, 135, 156, 0.20)",
    colorEight: "#FEFAF7",
    colorNine: "#FE7122",
    colorTen: "#FDF4F9",
    colorEleven: "#B80074",
    colorTwelve: "#F6FFFE",
    colorThirteen: "#0898A0",
    colorFourteen: "#EB5757",
    colorFifteen: "#27BF41",
    colorSixTeen: "rgba(64, 187, 195, 0.15)",
    colorSeventeen: "#41BCC4",
    colorEighteen: "rgba(0, 0, 0, 0.40)",
    colorNineteen: "rgba(76, 217, 100, 0.15)",
    colorTwenty: "rgba(235, 87, 87, 0.15)",
    colorTwentyOne: "rgba(0, 0, 0, 0.5)",
    colorTwentyFour: "#71879C",
    colorTwentyFive: "#222",
    colorTwentySix: "#E1E8ED",
    colorTwentySeven: "#292F33",
    colorL1: "rgba(255, 255, 255, 0.06) 99.99%",
    colorL2: "#FFF",
  },
  Dark: {},
};

export const SIZES = {
  sizeOne: 8,
  sizeTwo: 9,
  sizeThree: 10,
  sizeFour: 11,
  sizeFive: 12,
  sizeFiveC: 14,
  sizeSix: 15,
  sizeSixB: 16,
  sizeSeven: 18,
  sizeSevenB: 19,
  sizeEight: 20,
  sizeNine: 25,
  sizeTen: 30,
  sizeEleven: 40,
};

export const IMAGES = {
  AddButton: require("../shared/assets/images/png/add.png"),

  BackButton: require("../shared/assets/images/png/back_button.png"),
  BackSab: require("../shared/assets/images/svg/back_sab.svg"),
  BellButton: require("../shared/assets/images/svg/bell.svg"),
  BetterPerformanceIcon: require("../shared/assets/images/png/better_performance.png"),
  BgCreateWealth: require("../shared/assets/images/png/bg_create_wealth.png"),
  BgStartABusiness: require("../shared/assets/images/png/bg_start_a_business.png"),
  Bubbles: require("../shared/assets/images/gif/bubbles.gif"),
  BuildWealth: require("../shared/assets/images/png/build_wealth.png"),
  CreatePlan: require("../shared/assets/images/png/create_plan.png"),
  DeleteButton: require("../shared/assets/images/svg/delete.svg"),
  EyeIcon: require("../shared/assets/images/svg/eye_icon.svg"),
  FeedIcon: require("../shared/assets/images/svg/feed_icon.svg"),
  HomeIcon: require("../shared/assets/images/svg/home_icon.svg"),
  InfoSab: require("../shared/assets/images/svg/info_sab.svg"),

  InformationOutline: require("../shared/assets/images/svg/information-outline.svg"),
  ModifyAsYP: require("../shared/assets/images/svg/modify_as_y_p.svg"),
  NeHistory: require("../shared/assets/images/svg/ne_history.svg"),
  PawIcon: require("../shared/assets/images/png/paw_icon.png"),
  PlansIcon: require("../shared/assets/images/svg/plans_icon.svg"),
  Quality: require("../shared/assets/images/png/quality.png"),
  Question: require("../shared/assets/images/svg/question.svg"),
  SabIcon: require("../shared/assets/images/png/sab_icon.png"),
  Splash: require("../shared/assets/images/png/splash.png"),
  SuperiorSelection: require("../shared/assets/images/png/superior_selection.png"),
  SuccessTick: require("../shared/assets/images/png/suucess_tick.png"),
  SwHistory: require("../shared/assets/images/svg/sw_history.svg"),
  TurnOn: require("../shared/assets/images/svg/turn_on.svg"),

  RiseLogo: require("../shared/assets/images/png/riselogo.png"),
  RiseLogoSVG: require("../shared/assets/images/svg/riselogo.svg"),

  WalletIcon: require("../shared/assets/images/svg/wallet_icon.svg"),

  HomeBg: require("../shared/assets/images/png/homebg.png"),
};

export const IconBottomBar = {
  Home: require("../shared/assets/images/svg/home_icon.svg"),
  Plans: require("../shared/assets/images/svg/plans_icon.svg"),
  Wallet: require("../shared/assets/images/svg/wallet_icon.svg"),
  Feed: require("../shared/assets/images/svg/feed_icon.svg"),
  RVLOGO: require("../shared/assets/images/jpeg/risevest_logo.jpeg"),
};

export const COUNTRIES = [
  {
    countryName: "Nigeria",
    countryCode: "NG",
    locale: "en-NG",
    phoneCode: "234",
    countryFlag: "🇳🇬",
    countryCcy: "NGN",
    currency: "₦",
  },
  {
    countryName: "Ghana",
    countryCode: "GH",
    phoneCode: "233",
    locale: "en-GH",
    countryFlag: "🇬🇭",
    countryCcy: "GHS",
    currency: "GH₵",
  },

  {
    countryName: "Kenya",
    countryCode: "KE",
    phoneCode: "254",
    locale: "en-KE",
    countryFlag: "🇰🇪",
    countryCcy: "KES",
    currency: "KSh",
  },

  {
    countryName: "Uganda",
    countryCode: "UG",
    phoneCode: "256",
    locale: "en-UG",
    countryFlag: "🇺🇬",
    countryCcy: "UGX",
    currency: "USh",
  },
];
