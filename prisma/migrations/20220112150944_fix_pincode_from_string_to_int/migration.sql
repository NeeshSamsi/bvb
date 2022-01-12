/*
  Warnings:

  - You are about to alter the column `dateOnPayment` on the `Receipt` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `pinCode` on the `Receipt` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Receipt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "invoiceNumber" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "emailId" TEXT NOT NULL,
    "pinCode" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "admissionFee" REAL NOT NULL,
    "admissionFeeRemark" TEXT NOT NULL,
    "tuitionFee" REAL NOT NULL,
    "tuitionFeeRemark" TEXT NOT NULL,
    "otherFee" REAL NOT NULL,
    "otherFeeRemark" TEXT NOT NULL,
    "examinationFee" REAL NOT NULL,
    "examinationFeeRemark" TEXT NOT NULL,
    "annualFee" REAL NOT NULL,
    "annualFeeRemark" TEXT NOT NULL,
    "lateMiscFee" REAL NOT NULL,
    "lateMiscFeeRemark" TEXT NOT NULL,
    "totalFee" REAL NOT NULL,
    "receivedBy" TEXT NOT NULL,
    "totalInWords" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "paymentNumber" TEXT NOT NULL,
    "dateOnPayment" DATETIME NOT NULL,
    "branch" TEXT NOT NULL
);
INSERT INTO "new_Receipt" ("addressLine1", "addressLine2", "admissionFee", "admissionFeeRemark", "annualFee", "annualFeeRemark", "branch", "class", "date", "dateOnPayment", "emailId", "examinationFee", "examinationFeeRemark", "id", "invoiceNumber", "lateMiscFee", "lateMiscFeeRemark", "mobileNumber", "name", "otherFee", "otherFeeRemark", "paymentMethod", "paymentNumber", "pinCode", "receivedBy", "state", "totalFee", "totalInWords", "tuitionFee", "tuitionFeeRemark") SELECT "addressLine1", "addressLine2", "admissionFee", "admissionFeeRemark", "annualFee", "annualFeeRemark", "branch", "class", "date", "dateOnPayment", "emailId", "examinationFee", "examinationFeeRemark", "id", "invoiceNumber", "lateMiscFee", "lateMiscFeeRemark", "mobileNumber", "name", "otherFee", "otherFeeRemark", "paymentMethod", "paymentNumber", "pinCode", "receivedBy", "state", "totalFee", "totalInWords", "tuitionFee", "tuitionFeeRemark" FROM "Receipt";
DROP TABLE "Receipt";
ALTER TABLE "new_Receipt" RENAME TO "Receipt";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
