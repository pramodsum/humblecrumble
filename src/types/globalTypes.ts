/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Currency codes.
 */
export enum CurrencyCode {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYR = "BYR",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHF = "CHF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  CRC = "CRC",
  CVE = "CVE",
  CZK = "CZK",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  GBP = "GBP",
  GEL = "GEL",
  GHS = "GHS",
  GMD = "GMD",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HRK = "HRK",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  INR = "INR",
  IQD = "IQD",
  ISK = "ISK",
  JEP = "JEP",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LTL = "LTL",
  LVL = "LVL",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SRD = "SRD",
  SSP = "SSP",
  STD = "STD",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TMT = "TMT",
  TND = "TND",
  TRY = "TRY",
  TTD = "TTD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  UYU = "UYU",
  UZS = "UZS",
  VEF = "VEF",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XCD = "XCD",
  XOF = "XOF",
  XPF = "XPF",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
}

/**
 * The set of valid sort keys for the Product query.
 */
export enum ProductSortKeys {
  BEST_SELLING = "BEST_SELLING",
  CREATED_AT = "CREATED_AT",
  ID = "ID",
  PRICE = "PRICE",
  PRODUCT_TYPE = "PRODUCT_TYPE",
  RELEVANCE = "RELEVANCE",
  TITLE = "TITLE",
  UPDATED_AT = "UPDATED_AT",
  VENDOR = "VENDOR",
}

/**
 * Specifies the input fields required for an attribute.
 */
export interface AttributeInput {
  key: string;
  value: string;
}

/**
 * Specifies the input fields to create a line item on a checkout.
 */
export interface CheckoutLineItemInput {
  customAttributes?: AttributeInput[] | null;
  quantity: number;
  variantId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
