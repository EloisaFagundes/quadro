export enum BrandColors {
  SoftBlue = "#3251A6",
  GrayXLight = "#F5F5F5F",
  Orange = "#EA6712",
  Marine = "#2E3F66",
  Red = "#FF0000",
  SoftOrange = "#FFCC5B",
  VibrantGreen = "#43BF43",
}

export class Color {
  public static readonly Black = "#000000";
  public static readonly White = "#FFFFFF";

  public static readonly GrayXDark = "#14171F";
  public static readonly GrayDark = "#757575";
  public static readonly Gray = "#A3A3A3";
  public static readonly GrayLight = "#9DA0A8";

  public static readonly Primary = BrandColors.SoftBlue;
  public static readonly Secondary = BrandColors.GrayXLight;
  public static readonly Accessory = BrandColors.Marine;
  public static readonly Neutral = Color.GrayDark;
  public static readonly CallToAction = BrandColors.Orange;

  public static readonly Alert = BrandColors.Red;
  public static readonly Warning = BrandColors.SoftOrange;
  public static readonly Success = BrandColors.VibrantGreen;
}

export enum Spacing {
  Micro = "4px",
  Small = "8px",
  Medium = "12px",
  Large = "16px",
  XLarge = "24px",
  XXLarge = "32px",
}

export enum FontFamily {
  Primary = 'Roboto, Arial, sans-serif',
  Secondary = 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
}

export enum FontSize {
  Micro = "12px",
  Small = "14px",
  Medium = "16px",
  Large = "20px",
  XLarge = "28px",
  XXLarge = "32px",
}

export enum IconSize {
  Small = "16px",
  Medium = "24px",
  Large = "36px",
}

export const Shadow = {
    Small: '0px 2px 2px 0px rgba(0,0,0,0.1)',
  };