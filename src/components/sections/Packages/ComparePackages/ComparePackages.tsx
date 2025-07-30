"use client";

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
  value: string | boolean; // e.g., "✓", "✗", "200 Transactions", etc.
};

type PackagesCompareT = {
  packages: Package[]; // Columns
  featureCategories: FeatureCategory[]; // Headings
  features: Feature[]; // Rows under each heading
  packageFeatures: PackageFeature[]; // Table data
};

// Data

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: "AED 999 Month",
  },
  {
    id: "starter",
    name: "Starter",
    price: "AED 2749 Month",
  },
  {
    id: "smart",
    name: "Smart",
    price: "AED 4199 Month",
  },
  {
    id: "professional",
    name: "Professional",
    price: "AED 5899 Month",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "AED 14999 Month",
  },
];

const featureCategories: FeatureCategory[] = [
  {
    id: "bookkeeping",
    title: "BOOKKEEPING",
  },
  {
    id: "internal_auditing",
    title: "INTERNAL AUDITING",
  },
  {
    id: "software",
    title: "SOFTWARE",
  },
  {
    id: "cfo",
    title: "CFO",
  },
  {
    id: "tax",
    title: "TAX",
  },
  {
    id: "additional_privileges",
    title: "ADDITIONAL PRIVILAGES",
  },
];

const features: Feature[] = [
  // Bookkeeping
  { id: "1", categoryId: "bookkeeping", name: "BOOKKEEPING" },

  { id: "bk_transactions", categoryId: "bookkeeping", name: "Transactions" },
  { id: "bk_accountant", categoryId: "bookkeeping", name: "Accountant" },
  {
    id: "bk_depreciation_calculation",
    categoryId: "bookkeeping",
    name: "Depreciation Calculation",
  },
  {
    id: "bk_bank_reconciliation",
    categoryId: "bookkeeping",
    name: "Bank Reconciliation",
  },
  { id: "bk_cst_supplier", categoryId: "bookkeeping", name: "Cst & Supplier" },
  {
    id: "bk_reconciliation",
    categoryId: "bookkeeping",
    name: "Reconciliation",
  },

  // Internal Auditing
  { id: "2", categoryId: "internal_auditing", name: "INTERNAL AUDITING" },

  {
    id: "ia_stocktaking",
    categoryId: "internal_auditing",
    name: "Stocktaking",
  },
  {
    id: "ia_stock_analysis",
    categoryId: "internal_auditing",
    name: "Stock Analysis",
  },
  {
    id: "ia_fixing_accounts",
    categoryId: "internal_auditing",
    name: "Fixing Accounts",
  },
  {
    id: "ia_role_distribution",
    categoryId: "internal_auditing",
    name: "Role Distribution",
  },
  {
    id: "ia_accountant_testing",
    categoryId: "internal_auditing",
    name: "Accountant Testing",
  },
  {
    id: "ia_risk_management",
    categoryId: "internal_auditing",
    name: "Risk Management",
  },
  {
    id: "ia_assets_reevaluation",
    categoryId: "internal_auditing",
    name: "Assets Reevaluation",
  },
  {
    id: "ia_cost_control",
    categoryId: "internal_auditing",
    name: "Cost Control",
  },

  // Software
  { id: "3", categoryId: "software", name: "SOFTWARE" },
  { id: "sw_software_advice", categoryId: "software", name: "Software Advice" },
  {
    id: "sw_choosing_software",
    categoryId: "software",
    name: "Choosing Software",
  },
  { id: "sw_users", categoryId: "software", name: "Users" },
  {
    id: "sw_technical_support",
    categoryId: "software",
    name: "Technical Support",
  },
  {
    id: "sw_fixing_charts_of_accounts",
    categoryId: "software",
    name: "Fixing Charts Of Accounts",
  },
  {
    id: "sw_digital_auditing",
    categoryId: "software",
    name: "Digital Auditing",
  },
  {
    id: "sw_privilege_assignment",
    categoryId: "software",
    name: "Privilege Assignment",
  },

  // CFO

  { id: "3", categoryId: "cfo", name: "CFO" },

  { id: "cfo_financial_manager", categoryId: "cfo", name: "Financial Manager" },
  { id: "cfo_pnl_reports", categoryId: "cfo", name: "P&L Reports" },
  { id: "cfo_balance_sheet", categoryId: "cfo", name: "Balance Sheet" },
  {
    id: "cfo_cash_flow_statements",
    categoryId: "cfo",
    name: "Cash Flow Statments",
  },
  {
    id: "cfo_accountant_support",
    categoryId: "cfo",
    name: "Accountant Support",
  },
  { id: "cfo_internal_control", categoryId: "cfo", name: "Internal Control" },
  { id: "cfo_onsite_visits", categoryId: "cfo", name: "Onsite Visits" },
  {
    id: "cfo_decision_making_help",
    categoryId: "cfo",
    name: "Decision Making Help",
  },
  {
    id: "cfo_overseeing_accountants",
    categoryId: "cfo",
    name: "Overseeing Accountants",
  },
  { id: "cfo_on_demand_reports", categoryId: "cfo", name: "On Demand Reports" },

  // Tax

  { id: "4", categoryId: "tax", name: "TAX" },
  { id: "tax_vat_registration", categoryId: "tax", name: "VAT Registeration" },
  { id: "tax_vat_advice", categoryId: "tax", name: "VAT Advice" },
  { id: "tax_vat_return_filing", categoryId: "tax", name: "VAT Return Filing" },
  {
    id: "tax_corporate_tax_registration",
    categoryId: "tax",
    name: "Corporate TAX Registeration",
  },
  {
    id: "tax_corporate_tax_advice",
    categoryId: "tax",
    name: "Corporate TAX Advice",
  },
  {
    id: "tax_audited_statements",
    categoryId: "tax",
    name: "Audited Statments",
  },
  { id: "tax_aml_compliance", categoryId: "tax", name: "AML Compliance" },

  // Additional Privileges

  {
    id: "5",
    categoryId: "additional_privileges",
    name: "ADDITIONAL PRIVILAGES",
  },
  {
    id: "ap_accountant_hiring",
    categoryId: "additional_privileges",
    name: "Accountant Hiring",
  },
  {
    id: "ap_business_review_meeting",
    categoryId: "additional_privileges",
    name: "Business Review Meeting",
  },
  {
    id: "ap_ceo_meeting",
    categoryId: "additional_privileges",
    name: "CEO Meeting",
  },
];

const packageFeatures: PackageFeature[] = [
  // Basic Package Features
  {
    packageId: "basic",
    featureId: "bk_transactions",
    value: "50 Transactions",
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
  { packageId: "basic", featureId: "sw_users", value: "No Users" },
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
  { packageId: "basic", featureId: "cfo_overseeing_accountants", value: false },
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
  { packageId: "basic", featureId: "ap_business_review_meeting", value: false },
  { packageId: "basic", featureId: "ap_ceo_meeting", value: false },

  // Starter Package Features
  {
    packageId: "starter",
    featureId: "bk_transactions",
    value: "200 Transactions",
  },
  {
    packageId: "starter",
    featureId: "bk_accountant",
    value: "Shared Accountant",
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
  { packageId: "starter", featureId: "sw_users", value: "2 Users" },
  { packageId: "starter", featureId: "sw_technical_support", value: true },
  {
    packageId: "starter",
    featureId: "sw_fixing_charts_of_accounts",
    value: true,
  },
  { packageId: "starter", featureId: "sw_digital_auditing", value: false },
  { packageId: "starter", featureId: "sw_privilege_assignment", value: false },

  { packageId: "starter", featureId: "cfo_financial_manager", value: false },
  { packageId: "starter", featureId: "cfo_pnl_reports", value: true },
  { packageId: "starter", featureId: "cfo_balance_sheet", value: true },
  { packageId: "starter", featureId: "cfo_cash_flow_statements", value: true },
  { packageId: "starter", featureId: "cfo_accountant_support", value: false },
  { packageId: "starter", featureId: "cfo_internal_control", value: false },
  { packageId: "starter", featureId: "cfo_onsite_visits", value: false },
  { packageId: "starter", featureId: "cfo_decision_making_help", value: false },
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
  { packageId: "starter", featureId: "tax_corporate_tax_advice", value: true },
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
    value: "1000 Transactions",
  },
  { packageId: "smart", featureId: "bk_accountant", value: false },
  { packageId: "smart", featureId: "bk_depreciation_calculation", value: true },
  { packageId: "smart", featureId: "bk_bank_reconciliation", value: true },
  { packageId: "smart", featureId: "bk_cst_supplier", value: true },
  { packageId: "smart", featureId: "bk_reconciliation", value: true },

  {
    packageId: "smart",
    featureId: "ia_stocktaking",
    value: "1/Year* Stocktaking",
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
  { packageId: "smart", featureId: "sw_users", value: "4 Users" },
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
    value: "Shared Financial Manager",
  },
  { packageId: "smart", featureId: "cfo_pnl_reports", value: true },
  { packageId: "smart", featureId: "cfo_balance_sheet", value: true },
  { packageId: "smart", featureId: "cfo_cash_flow_statements", value: true },
  { packageId: "smart", featureId: "cfo_accountant_support", value: true },
  { packageId: "smart", featureId: "cfo_internal_control", value: true },
  {
    packageId: "smart",
    featureId: "cfo_onsite_visits",
    value: "1 Onsite Visits",
  },
  { packageId: "smart", featureId: "cfo_decision_making_help", value: true },
  { packageId: "smart", featureId: "cfo_overseeing_accountants", value: true },
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
    value: "1 Business Review Meeting",
  },
  {
    packageId: "smart",
    featureId: "ap_ceo_meeting",
    value: "1*30Mins CEO Meeting",
  },

  // Professional Package Features
  {
    packageId: "professional",
    featureId: "bk_transactions",
    value: "1200 Transactions",
  },
  {
    packageId: "professional",
    featureId: "bk_accountant",
    value: "Shared Accountant",
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
    value: "2/Year* Stocktaking",
  },
  { packageId: "professional", featureId: "ia_stock_analysis", value: true },
  { packageId: "professional", featureId: "ia_fixing_accounts", value: true },
  { packageId: "professional", featureId: "ia_role_distribution", value: true },
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
  { packageId: "professional", featureId: "sw_choosing_software", value: true },
  { packageId: "professional", featureId: "sw_users", value: "7 Users" },
  { packageId: "professional", featureId: "sw_technical_support", value: true },
  {
    packageId: "professional",
    featureId: "sw_fixing_charts_of_accounts",
    value: true,
  },
  { packageId: "professional", featureId: "sw_digital_auditing", value: false },
  {
    packageId: "professional",
    featureId: "sw_privilege_assignment",
    value: false,
  },

  {
    packageId: "professional",
    featureId: "cfo_financial_manager",
    value: "Shared Financial Manager",
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
  { packageId: "professional", featureId: "cfo_internal_control", value: true },
  {
    packageId: "professional",
    featureId: "cfo_onsite_visits",
    value: "2 Onsite Visits",
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

  { packageId: "professional", featureId: "tax_vat_registration", value: true },
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
    value: "3 Accountant Hiring",
  },
  {
    packageId: "professional",
    featureId: "ap_business_review_meeting",
    value: "2 Business Review Meeting",
  },
  {
    packageId: "professional",
    featureId: "ap_ceo_meeting",
    value: "2*30Mins CEO Meeting",
  },

  // Ultimate Package Features
  {
    packageId: "ultimate",
    featureId: "bk_transactions",
    value: "Unlimited Transactions",
  },
  {
    packageId: "ultimate",
    featureId: "bk_accountant",
    value: "Dedicated Accountant",
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
    value: "4/Year* Or 1/Year** Stocktaking",
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
  { packageId: "ultimate", featureId: "sw_users", value: "10 Users" },
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
    value: "Dedicaed Financial Manager",
  },
  { packageId: "ultimate", featureId: "cfo_pnl_reports", value: true },
  { packageId: "ultimate", featureId: "cfo_balance_sheet", value: true },
  { packageId: "ultimate", featureId: "cfo_cash_flow_statements", value: true },
  { packageId: "ultimate", featureId: "cfo_accountant_support", value: true },
  { packageId: "ultimate", featureId: "cfo_internal_control", value: true },
  {
    packageId: "ultimate",
    featureId: "cfo_onsite_visits",
    value: "4 Onsite Visits",
  },
  { packageId: "ultimate", featureId: "cfo_decision_making_help", value: true },
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
  { packageId: "ultimate", featureId: "tax_corporate_tax_advice", value: true },
  { packageId: "ultimate", featureId: "tax_audited_statements", value: true },
  { packageId: "ultimate", featureId: "tax_aml_compliance", value: true },

  {
    packageId: "ultimate",
    featureId: "ap_accountant_hiring",
    value: "5 Accountant Hiring",
  },
  {
    packageId: "ultimate",
    featureId: "ap_business_review_meeting",
    value: "4 Business Review Meeting",
  },
  {
    packageId: "ultimate",
    featureId: "ap_ceo_meeting",
    value: "4*30Mins CEO Meeting",
  },
];

const packagesCompareData: PackagesCompareT = {
  packages,
  featureCategories,
  features,
  packageFeatures,
};

export default function PackagesCompare() {
  return (
    <div className="overflow-x-auto border rounded-xl shadow-sm">
      <table className="min-w-full text-center text-sm">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-white p-4 text-left font-bold border-r border-gray-200">
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
              {/* <tr>
                <td
                  colSpan={packages.length + 1}
                  className="sticky left-0 z-10 bg-gray-100 text-left font-semibold px-4 py-2 border-t border-b border-gray-300"
                >
                  {category.title}
                </td>
              </tr> */}
              {packagesCompareData?.features
                .filter((feature) => feature.categoryId === category.id)
                .map((feature, index) => (
                  <tr key={feature.id} className="border-b">
                    <td
                      className={`sticky left-0 z-0 bg-white text-left px-4 py-2 border-r border-gray-200 font-medium ${
                        index === 0
                          ? "font-semibold bg-gray-100 border-gray-300"
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
                        <td key={pkg.id + feature.id} className="px-4 py-2">
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
