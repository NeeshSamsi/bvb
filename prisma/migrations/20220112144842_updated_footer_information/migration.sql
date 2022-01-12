/*
  Warnings:

  - You are about to drop the column `dateInWords` on the `Receipt` table. All the data in the column will be lost.
  - Added the required column `admissionFeeRemark` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `annualFeeRemark` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOnPayment` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examinationFeeRemark` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lateMiscFeeRemark` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherFeeRemark` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentNumber` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tuitionFeeRemark` to the `Receipt` table without a default value. This is not possible if the table is not empty.

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
    "pinCode" TEXT NOT NULL,
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
    "dateOnPayment" TEXT NOT NULL,
    "branch" TEXT NOT NULL
);
INSERT INTO "new_Receipt" ("addressLine1", "addressLine2", "admissionFee", "annualFee", "branch", "class", "date", "emailId", "examinationFee", "id", "invoiceNumber", "lateMiscFee", "mobileNumber", "name", "otherFee", "paymentMethod", "pinCode", "receivedBy", "state", "totalFee", "totalInWords", "tuitionFee") SELECT "addressLine1", "addressLine2", "admissionFee", "annualFee", "branch", "class", "date", "emailId", "examinationFee", "id", "invoiceNumber", "lateMiscFee", "mobileNumber", "name", "otherFee", "paymentMethod", "pinCode", "receivedBy", "state", "totalFee", "totalInWords", "tuitionFee" FROM "Receipt";
DROP TABLE "Receipt";
ALTER TABLE "new_Receipt" RENAME TO "Receipt";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
