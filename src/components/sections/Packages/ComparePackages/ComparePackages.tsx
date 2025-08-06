"use client";

import { useTranslations } from "next-intl";
import React from "react";

// Types

type Package = {
  id: string;
  name: string;
  price: string;
};

type FeatureCategory = {
  id: string;
  title: string;
};

type Feature = {
  id: string;
  categoryId: string;
  name: string;
};

type PackageFeature = {
  packageId: string;
  featureId: string;
  value: string | boolean; // e.g., "✓ true ", "✗ false", "200 Transactions", etc.
};

type PackagesCompareT = {
  packages: Package[]; // Columns
  featureCategories: FeatureCategory[]; // Headings
  features: Feature[]; // Rows under each heading
  packageFeatures: PackageFeature[]; // Table data
};

export default function PackagesCompare() {
  const t = useTranslations();
  const packages: Package[] = [
    {
      id: "basic",
      name: t("packcompare.basic.name"),
      price: t("packcompare.basic.price"),
    },
    {
      id: "starter",
      name: t("packcompare.starter.name"),
      price: t("packcompare.starter.price"),
    },
    {
      id: "smart",
      name: t("packcompare.smart.name"),
      price: t("packcompare.smart.price"),
    },
    {
      id: "professional",
      name: t("packcompare.professional.name"),
      price: t("packcompare.professional.price"),
    },
    {
      id: "ultimate",
      name: t("packcompare.ultimate.name"),
      price: t("packcompare.ultimate.price"),
    },
  ];

  const featureCategories: FeatureCategory[] = [
    {
      id: "bookkeeping",
      title: t("featureCategories.bookkeeping"),
    },
    {
      id: "internal_auditing",
      title: t("featureCategories.internal_auditing"),
    },
    {
      id: "software",
      title: t("featureCategories.software"),
    },
    {
      id: "cfo",
      title: t("featureCategories.cfo"),
    },
    {
      id: "tax",
      title: t("featureCategories.tax"),
    },
    {
      id: "additional_privileges",
      title: t("featureCategories.additional_privileges"),
    },
  ];
  const features: Feature[] = [
    { id: "1", categoryId: "bookkeeping", name: t("featuresPack.1") },
    {
      id: "bk_transactions",
      categoryId: "bookkeeping",
      name: t("featuresPack.bk_transactions"),
    },
    {
      id: "bk_accountant",
      categoryId: "bookkeeping",
      name: t("featuresPack.bk_accountant"),
    },
    {
      id: "bk_depreciation_calculation",
      categoryId: "bookkeeping",
      name: t("featuresPack.bk_depreciation_calculation"),
    },
    {
      id: "bk_bank_reconciliation",
      categoryId: "bookkeeping",
      name: t("featuresPack.bk_bank_reconciliation"),
    },
    {
      id: "bk_cst_supplier",
      categoryId: "bookkeeping",
      name: t("featuresPack.bk_cst_supplier"),
    },
    {
      id: "bk_reconciliation",
      categoryId: "bookkeeping",
      name: t("featuresPack.bk_reconciliation"),
    },

    { id: "2", categoryId: "internal_auditing", name: t("featuresPack.2") },
    {
      id: "ia_stocktaking",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_stocktaking"),
    },
    {
      id: "ia_stock_analysis",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_stock_analysis"),
    },
    {
      id: "ia_fixing_accounts",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_fixing_accounts"),
    },
    {
      id: "ia_role_distribution",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_role_distribution"),
    },
    {
      id: "ia_accountant_testing",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_accountant_testing"),
    },
    {
      id: "ia_risk_management",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_risk_management"),
    },
    {
      id: "ia_assets_reevaluation",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_assets_reevaluation"),
    },
    {
      id: "ia_cost_control",
      categoryId: "internal_auditing",
      name: t("featuresPack.ia_cost_control"),
    },

    { id: "3", categoryId: "software", name: t("featuresPack.3") },
    {
      id: "sw_software_advice",
      categoryId: "software",
      name: t("featuresPack.sw_software_advice"),
    },
    {
      id: "sw_choosing_software",
      categoryId: "software",
      name: t("featuresPack.sw_choosing_software"),
    },
    {
      id: "sw_users",
      categoryId: "software",
      name: t("featuresPack.sw_users"),
    },
    {
      id: "sw_technical_support",
      categoryId: "software",
      name: t("featuresPack.sw_technical_support"),
    },
    {
      id: "sw_fixing_charts_of_accounts",
      categoryId: "software",
      name: t("featuresPack.sw_fixing_charts_of_accounts"),
    },
    {
      id: "sw_digital_auditing",
      categoryId: "software",
      name: t("featuresPack.sw_digital_auditing"),
    },
    {
      id: "sw_privilege_assignment",
      categoryId: "software",
      name: t("featuresPack.sw_privilege_assignment"),
    },

    { id: "3", categoryId: "cfo", name: t("featuresPack.3") },
    {
      id: "cfo_financial_manager",
      categoryId: "cfo",
      name: t("featuresPack.cfo_financial_manager"),
    },
    {
      id: "cfo_pnl_reports",
      categoryId: "cfo",
      name: t("featuresPack.cfo_pnl_reports"),
    },
    {
      id: "cfo_balance_sheet",
      categoryId: "cfo",
      name: t("featuresPack.cfo_balance_sheet"),
    },
    {
      id: "cfo_cash_flow_statements",
      categoryId: "cfo",
      name: t("featuresPack.cfo_cash_flow_statements"),
    },
    {
      id: "cfo_accountant_support",
      categoryId: "cfo",
      name: t("featuresPack.cfo_accountant_support"),
    },
    {
      id: "cfo_internal_control",
      categoryId: "cfo",
      name: t("featuresPack.cfo_internal_control"),
    },
    {
      id: "cfo_onsite_visits",
      categoryId: "cfo",
      name: t("featuresPack.cfo_onsite_visits"),
    },
    {
      id: "cfo_decision_making_help",
      categoryId: "cfo",
      name: t("featuresPack.cfo_decision_making_help"),
    },
    {
      id: "cfo_overseeing_accountants",
      categoryId: "cfo",
      name: t("featuresPack.cfo_overseeing_accountants"),
    },
    {
      id: "cfo_on_demand_reports",
      categoryId: "cfo",
      name: t("featuresPack.cfo_on_demand_reports"),
    },

    { id: "4", categoryId: "tax", name: t("featuresPack.4") },
    {
      id: "tax_vat_registration",
      categoryId: "tax",
      name: t("featuresPack.tax_vat_registration"),
    },
    {
      id: "tax_vat_advice",
      categoryId: "tax",
      name: t("featuresPack.tax_vat_advice"),
    },
    {
      id: "tax_vat_return_filing",
      categoryId: "tax",
      name: t("featuresPack.tax_vat_return_filing"),
    },
    {
      id: "tax_corporate_tax_registration",
      categoryId: "tax",
      name: t("featuresPack.tax_corporate_tax_registration"),
    },
    {
      id: "tax_corporate_tax_advice",
      categoryId: "tax",
      name: t("featuresPack.tax_corporate_tax_advice"),
    },
    {
      id: "tax_audited_statements",
      categoryId: "tax",
      name: t("featuresPack.tax_audited_statements"),
    },
    {
      id: "tax_aml_compliance",
      categoryId: "tax",
      name: t("featuresPack.tax_aml_compliance"),
    },

    { id: "5", categoryId: "additional_privileges", name: t("featuresPack.5") },
    {
      id: "ap_accountant_hiring",
      categoryId: "additional_privileges",
      name: t("featuresPack.ap_accountant_hiring"),
    },
    {
      id: "ap_business_review_meeting",
      categoryId: "additional_privileges",
      name: t("featuresPack.ap_business_review_meeting"),
    },
    {
      id: "ap_ceo_meeting",
      categoryId: "additional_privileges",
      name: t("featuresPack.ap_ceo_meeting"),
    },
  ];
  const packageFeatures: PackageFeature[] = [
    // Basic Package Features
    {
      packageId: "basic",
      featureId: "bk_transactions",
      value: t("packageFeatures.basic.bk_transactions"),
    },
    { packageId: "basic", featureId: "bk_accountant", value: false },
    {
      packageId: "basic",
      featureId: "bk_depreciation_calculation",
      value: false,
    },
    { packageId: "basic", featureId: "bk_bank_reconciliation", value: false },
    { packageId: "basic", featureId: "bk_cst_supplier", value: false },
    { packageId: "basic", featureId: "bk_reconciliation", value: false },

    { packageId: "basic", featureId: "ia_stocktaking", value: false },
    { packageId: "basic", featureId: "ia_stock_analysis", value: false },
    { packageId: "basic", featureId: "ia_fixing_accounts", value: false },
    { packageId: "basic", featureId: "ia_role_distribution", value: false },
    { packageId: "basic", featureId: "ia_accountant_testing", value: false },
    { packageId: "basic", featureId: "ia_risk_management", value: false },
    { packageId: "basic", featureId: "ia_assets_reevaluation", value: false },
    { packageId: "basic", featureId: "ia_cost_control", value: false },

    { packageId: "basic", featureId: "sw_software_advice", value: true },
    { packageId: "basic", featureId: "sw_choosing_software", value: true },
    {
      packageId: "basic",
      featureId: "sw_users",
      value: t("packageFeatures.basic.sw_users"),
    },
    { packageId: "basic", featureId: "sw_technical_support", value: false },
    {
      packageId: "basic",
      featureId: "sw_fixing_charts_of_accounts",
      value: false,
    },
    { packageId: "basic", featureId: "sw_digital_auditing", value: false },
    { packageId: "basic", featureId: "sw_privilege_assignment", value: false },

    { packageId: "basic", featureId: "cfo_financial_manager", value: false },
    { packageId: "basic", featureId: "cfo_pnl_reports", value: true },
    { packageId: "basic", featureId: "cfo_balance_sheet", value: true },
    { packageId: "basic", featureId: "cfo_cash_flow_statements", value: true },
    { packageId: "basic", featureId: "cfo_accountant_support", value: false },
    { packageId: "basic", featureId: "cfo_internal_control", value: false },
    { packageId: "basic", featureId: "cfo_onsite_visits", value: false },
    { packageId: "basic", featureId: "cfo_decision_making_help", value: false },
    {
      packageId: "basic",
      featureId: "cfo_overseeing_accountants",
      value: false,
    },
    { packageId: "basic", featureId: "cfo_on_demand_reports", value: false },

    { packageId: "basic", featureId: "tax_vat_registration", value: true },
    { packageId: "basic", featureId: "tax_vat_advice", value: true },
    { packageId: "basic", featureId: "tax_vat_return_filing", value: true },
    {
      packageId: "basic",
      featureId: "tax_corporate_tax_registration",
      value: true,
    },
    { packageId: "basic", featureId: "tax_corporate_tax_advice", value: true },
    { packageId: "basic", featureId: "tax_audited_statements", value: true },
    { packageId: "basic", featureId: "tax_aml_compliance", value: false },

    { packageId: "basic", featureId: "ap_accountant_hiring", value: false },
    {
      packageId: "basic",
      featureId: "ap_business_review_meeting",
      value: false,
    },
    { packageId: "basic", featureId: "ap_ceo_meeting", value: false },

    // Starter Package Features
    {
      packageId: "starter",
      featureId: "bk_transactions",
      value: t("packageFeatures.starter.bk_transactions"),
    },
    {
      packageId: "starter",
      featureId: "bk_accountant",
      value: t("packageFeatures.starter.bk_accountant"),
    },
    {
      packageId: "starter",
      featureId: "bk_depreciation_calculation",
      value: false,
    },
    { packageId: "starter", featureId: "bk_bank_reconciliation", value: false },
    { packageId: "starter", featureId: "bk_cst_supplier", value: false },
    { packageId: "starter", featureId: "bk_reconciliation", value: false },

    { packageId: "starter", featureId: "ia_stocktaking", value: false },
    { packageId: "starter", featureId: "ia_stock_analysis", value: false },
    { packageId: "starter", featureId: "ia_fixing_accounts", value: false },
    { packageId: "starter", featureId: "ia_role_distribution", value: false },
    { packageId: "starter", featureId: "ia_accountant_testing", value: false },
    { packageId: "starter", featureId: "ia_risk_management", value: false },
    { packageId: "starter", featureId: "ia_assets_reevaluation", value: false },
    { packageId: "starter", featureId: "ia_cost_control", value: false },

    { packageId: "starter", featureId: "sw_software_advice", value: true },
    { packageId: "starter", featureId: "sw_choosing_software", value: true },
    {
      packageId: "starter",
      featureId: "sw_users",
      value: t("packageFeatures.starter.sw_users"),
    },
    { packageId: "starter", featureId: "sw_technical_support", value: true },
    {
      packageId: "starter",
      featureId: "sw_fixing_charts_of_accounts",
      value: true,
    },
    { packageId: "starter", featureId: "sw_digital_auditing", value: false },
    {
      packageId: "starter",
      featureId: "sw_privilege_assignment",
      value: false,
    },

    { packageId: "starter", featureId: "cfo_financial_manager", value: false },
    { packageId: "starter", featureId: "cfo_pnl_reports", value: true },
    { packageId: "starter", featureId: "cfo_balance_sheet", value: true },
    {
      packageId: "starter",
      featureId: "cfo_cash_flow_statements",
      value: true,
    },
    { packageId: "starter", featureId: "cfo_accountant_support", value: false },
    { packageId: "starter", featureId: "cfo_internal_control", value: false },
    { packageId: "starter", featureId: "cfo_onsite_visits", value: false },
    {
      packageId: "starter",
      featureId: "cfo_decision_making_help",
      value: false,
    },
    {
      packageId: "starter",
      featureId: "cfo_overseeing_accountants",
      value: false,
    },
    { packageId: "starter", featureId: "cfo_on_demand_reports", value: false },

    { packageId: "starter", featureId: "tax_vat_registration", value: true },
    { packageId: "starter", featureId: "tax_vat_advice", value: true },
    { packageId: "starter", featureId: "tax_vat_return_filing", value: true },
    {
      packageId: "starter",
      featureId: "tax_corporate_tax_registration",
      value: true,
    },
    {
      packageId: "starter",
      featureId: "tax_corporate_tax_advice",
      value: true,
    },
    { packageId: "starter", featureId: "tax_audited_statements", value: true },
    { packageId: "starter", featureId: "tax_aml_compliance", value: false },

    { packageId: "starter", featureId: "ap_accountant_hiring", value: false },
    {
      packageId: "starter",
      featureId: "ap_business_review_meeting",
      value: false,
    },
    { packageId: "starter", featureId: "ap_ceo_meeting", value: false },

    // Smart Package Features
    {
      packageId: "smart",
      featureId: "bk_transactions",
      value: t("packageFeatures.smart.bk_transactions"),
    },
    { packageId: "smart", featureId: "bk_accountant", value: false },
    {
      packageId: "smart",
      featureId: "bk_depreciation_calculation",
      value: true,
    },
    { packageId: "smart", featureId: "bk_bank_reconciliation", value: true },
    { packageId: "smart", featureId: "bk_cst_supplier", value: true },
    { packageId: "smart", featureId: "bk_reconciliation", value: true },

    {
      packageId: "smart",
      featureId: "ia_stocktaking",
      value: t("packageFeatures.smart.ia_stocktaking"),
    },
    { packageId: "smart", featureId: "ia_stock_analysis", value: true },
    { packageId: "smart", featureId: "ia_fixing_accounts", value: true },
    { packageId: "smart", featureId: "ia_role_distribution", value: true },
    { packageId: "smart", featureId: "ia_accountant_testing", value: true },
    { packageId: "smart", featureId: "ia_risk_management", value: true },
    { packageId: "smart", featureId: "ia_assets_reevaluation", value: false },
    { packageId: "smart", featureId: "ia_cost_control", value: true },

    { packageId: "smart", featureId: "sw_software_advice", value: true },
    { packageId: "smart", featureId: "sw_choosing_software", value: true },
    {
      packageId: "smart",
      featureId: "sw_users",
      value: t("packageFeatures.smart.sw_users"),
    },
    { packageId: "smart", featureId: "sw_technical_support", value: true },
    {
      packageId: "smart",
      featureId: "sw_fixing_charts_of_accounts",
      value: true,
    },
    { packageId: "smart", featureId: "sw_digital_auditing", value: false },
    { packageId: "smart", featureId: "sw_privilege_assignment", value: false },

    {
      packageId: "smart",
      featureId: "cfo_financial_manager",
      value: t("packageFeatures.smart.cfo_financial_manager"),
    },
    { packageId: "smart", featureId: "cfo_pnl_reports", value: true },
    { packageId: "smart", featureId: "cfo_balance_sheet", value: true },
    { packageId: "smart", featureId: "cfo_cash_flow_statements", value: true },
    { packageId: "smart", featureId: "cfo_accountant_support", value: true },
    { packageId: "smart", featureId: "cfo_internal_control", value: true },
    {
      packageId: "smart",
      featureId: "cfo_onsite_visits",
      value: t("packageFeatures.smart.cfo_onsite_visits"),
    },
    { packageId: "smart", featureId: "cfo_decision_making_help", value: true },
    {
      packageId: "smart",
      featureId: "cfo_overseeing_accountants",
      value: true,
    },
    { packageId: "smart", featureId: "cfo_on_demand_reports", value: true },

    { packageId: "smart", featureId: "tax_vat_registration", value: true },
    { packageId: "smart", featureId: "tax_vat_advice", value: true },
    { packageId: "smart", featureId: "tax_vat_return_filing", value: true },
    {
      packageId: "smart",
      featureId: "tax_corporate_tax_registration",
      value: true,
    },
    { packageId: "smart", featureId: "tax_corporate_tax_advice", value: true },
    { packageId: "smart", featureId: "tax_audited_statements", value: true },
    { packageId: "smart", featureId: "tax_aml_compliance", value: false },

    { packageId: "smart", featureId: "ap_accountant_hiring", value: true },
    {
      packageId: "smart",
      featureId: "ap_business_review_meeting",
      value: t("packageFeatures.smart.ap_business_review_meeting"),
    },
    {
      packageId: "smart",
      featureId: "ap_ceo_meeting",
      value: t("packageFeatures.smart.ap_ceo_meeting"),
    },

    // Professional Package Features
    {
      packageId: "professional",
      featureId: "bk_transactions",
      value: t("packageFeatures.professional.bk_transactions"),
    },
    {
      packageId: "professional",
      featureId: "bk_accountant",
      value: t("packageFeatures.professional.bk_accountant"),
    },
    {
      packageId: "professional",
      featureId: "bk_depreciation_calculation",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "bk_bank_reconciliation",
      value: true,
    },
    { packageId: "professional", featureId: "bk_cst_supplier", value: true },
    { packageId: "professional", featureId: "bk_reconciliation", value: true },

    {
      packageId: "professional",
      featureId: "ia_stocktaking",
      value: t("packageFeatures.professional.ia_stocktaking"),
    },
    { packageId: "professional", featureId: "ia_stock_analysis", value: true },
    { packageId: "professional", featureId: "ia_fixing_accounts", value: true },
    {
      packageId: "professional",
      featureId: "ia_role_distribution",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "ia_accountant_testing",
      value: false,
    },
    { packageId: "professional", featureId: "ia_risk_management", value: true },
    {
      packageId: "professional",
      featureId: "ia_assets_reevaluation",
      value: true,
    },
    { packageId: "professional", featureId: "ia_cost_control", value: true },

    { packageId: "professional", featureId: "sw_software_advice", value: true },
    {
      packageId: "professional",
      featureId: "sw_choosing_software",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "sw_users",
      value: t("packageFeatures.professional.sw_users"),
    },
    {
      packageId: "professional",
      featureId: "sw_technical_support",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "sw_fixing_charts_of_accounts",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "sw_digital_auditing",
      value: false,
    },
    {
      packageId: "professional",
      featureId: "sw_privilege_assignment",
      value: false,
    },

    {
      packageId: "professional",
      featureId: "cfo_financial_manager",
      value: t("packageFeatures.professional.cfo_financial_manager"),
    },
    { packageId: "professional", featureId: "cfo_pnl_reports", value: true },
    { packageId: "professional", featureId: "cfo_balance_sheet", value: true },
    {
      packageId: "professional",
      featureId: "cfo_cash_flow_statements",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "cfo_accountant_support",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "cfo_internal_control",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "cfo_onsite_visits",
      value: t("packageFeatures.professional.cfo_onsite_visits"),
    },
    {
      packageId: "professional",
      featureId: "cfo_decision_making_help",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "cfo_overseeing_accountants",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "cfo_on_demand_reports",
      value: true,
    },

    {
      packageId: "professional",
      featureId: "tax_vat_registration",
      value: true,
    },
    { packageId: "professional", featureId: "tax_vat_advice", value: true },
    {
      packageId: "professional",
      featureId: "tax_vat_return_filing",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "tax_corporate_tax_registration",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "tax_corporate_tax_advice",
      value: true,
    },
    {
      packageId: "professional",
      featureId: "tax_audited_statements",
      value: true,
    },
    { packageId: "professional", featureId: "tax_aml_compliance", value: true },

    {
      packageId: "professional",
      featureId: "ap_accountant_hiring",
      value: t("packageFeatures.professional.ap_accountant_hiring"),
    },
    {
      packageId: "professional",
      featureId: "ap_business_review_meeting",
      value: t("packageFeatures.professional.ap_business_review_meeting"),
    },
    {
      packageId: "professional",
      featureId: "ap_ceo_meeting",
      value: t("packageFeatures.professional.ap_ceo_meeting"),
    },

    // Ultimate Package Features
    {
      packageId: "ultimate",
      featureId: "bk_transactions",
      value: t("packageFeatures.ultimate.bk_transactions"),
    },
    {
      packageId: "ultimate",
      featureId: "bk_accountant",
      value: t("packageFeatures.ultimate.bk_accountant"),
    },
    {
      packageId: "ultimate",
      featureId: "bk_depreciation_calculation",
      value: true,
    },
    {
      packageId: "ultimate",
      featureId: "bk_bank_reconciliation",
      value: true,
    },
    { packageId: "ultimate", featureId: "bk_cst_supplier", value: true },
    { packageId: "ultimate", featureId: "bk_reconciliation", value: true },

    {
      packageId: "ultimate",
      featureId: "ia_stocktaking",
      value: t("packageFeatures.ultimate.ia_stocktaking"),
    },
    { packageId: "ultimate", featureId: "ia_stock_analysis", value: true },
    { packageId: "ultimate", featureId: "ia_fixing_accounts", value: true },
    { packageId: "ultimate", featureId: "ia_role_distribution", value: true },
    { packageId: "ultimate", featureId: "ia_accountant_testing", value: true },
    { packageId: "ultimate", featureId: "ia_risk_management", value: true },
    {
      packageId: "ultimate",
      featureId: "ia_assets_reevaluation",
      value: true,
    },
    { packageId: "ultimate", featureId: "ia_cost_control", value: true },

    { packageId: "ultimate", featureId: "sw_software_advice", value: true },
    { packageId: "ultimate", featureId: "sw_choosing_software", value: true },
    {
      packageId: "ultimate",
      featureId: "sw_users",
      value: t("packageFeatures.ultimate.sw_users"),
    },
    { packageId: "ultimate", featureId: "sw_technical_support", value: true },
    {
      packageId: "ultimate",
      featureId: "sw_fixing_charts_of_accounts",
      value: true,
    },
    { packageId: "ultimate", featureId: "sw_digital_auditing", value: true },
    {
      packageId: "ultimate",
      featureId: "sw_privilege_assignment",
      value: true,
    },

    {
      packageId: "ultimate",
      featureId: "cfo_financial_manager",
      value: t("packageFeatures.ultimate.cfo_financial_manager"),
    },
    { packageId: "ultimate", featureId: "cfo_pnl_reports", value: true },
    { packageId: "ultimate", featureId: "cfo_balance_sheet", value: true },
    {
      packageId: "ultimate",
      featureId: "cfo_cash_flow_statements",
      value: true,
    },
    { packageId: "ultimate", featureId: "cfo_accountant_support", value: true },
    { packageId: "ultimate", featureId: "cfo_internal_control", value: true },
    {
      packageId: "ultimate",
      featureId: "cfo_onsite_visits",
      value: t("packageFeatures.ultimate.cfo_onsite_visits"),
    },
    {
      packageId: "ultimate",
      featureId: "cfo_decision_making_help",
      value: true,
    },
    {
      packageId: "ultimate",
      featureId: "cfo_overseeing_accountants",
      value: true,
    },
    { packageId: "ultimate", featureId: "cfo_on_demand_reports", value: true },

    { packageId: "ultimate", featureId: "tax_vat_registration", value: true },
    { packageId: "ultimate", featureId: "tax_vat_advice", value: true },
    { packageId: "ultimate", featureId: "tax_vat_return_filing", value: true },
    {
      packageId: "ultimate",
      featureId: "tax_corporate_tax_registration",
      value: true,
    },
    {
      packageId: "ultimate",
      featureId: "tax_corporate_tax_advice",
      value: true,
    },
    { packageId: "ultimate", featureId: "tax_audited_statements", value: true },
    { packageId: "ultimate", featureId: "tax_aml_compliance", value: true },

    {
      packageId: "ultimate",
      featureId: "ap_accountant_hiring",
      value: t("packageFeatures.ultimate.ap_accountant_hiring"),
    },
    {
      packageId: "ultimate",
      featureId: "ap_business_review_meeting",
      value: t("packageFeatures.ultimate.ap_business_review_meeting"),
    },
    {
      packageId: "ultimate",
      featureId: "ap_ceo_meeting",
      value: t("packageFeatures.ultimate.ap_ceo_meeting"),
    },
  ];
  const packagesCompareData: PackagesCompareT = {
    packages,
    featureCategories,
    features,
    packageFeatures,
  };
  return (
    <div className="overflow-x-auto border rounded-xl shadow-sm">
      <table className="min-w-full text-center text-sm bg-white dark:bg-dark-background text-black dark:text-white">
        <thead>
          <tr>
            <th className="sticky left-0 z-10  p-4 text-left font-bold border-r border-gray-200">
              Services
            </th>
            {packagesCompareData?.packages.map((pkg) => (
              <th key={pkg.id} className="p-4 font-bold border-b">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {packagesCompareData?.featureCategories.map((category) => (
            <React.Fragment key={category.id}>
              {packagesCompareData?.features
                .filter((feature) => feature.categoryId === category.id)
                .map((feature, index) => (
                  <tr key={feature.id} className="border-b">
                    <td
                      className={`sticky left-0 z-0  ltr:text-left rtl:text-right px-4 py-2 border-r border-gray-200 font-medium ${
                        index === 0
                          ? "font-semibold bg-gray-100 text-black  border-gray-300"
                          : ""
                      }`}
                    >
                      {feature.name}
                    </td>
                    {packagesCompareData?.packages.map((pkg) => {
                      const packageFeature = packageFeatures.find(
                        (pf) =>
                          pf.packageId === pkg.id && pf.featureId === feature.id
                      );
                      return (
                        <td
                          key={pkg.id + feature.id}
                          className={`px-4 py-2 ${
                            index === 0
                              ? "bg-gray-100 text-black  border-gray-300"
                              : ""
                          }`}
                        >
                          {packageFeature ? (
                            packageFeature.value === false ? (
                              <span className="text-red-500">✗</span>
                            ) : packageFeature?.value === true ? (
                              <span className="text-green-500">✓</span>
                            ) : (
                              packageFeature.value
                            )
                          ) : (
                            ""
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
