/*
  Warnings:

  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Invoice";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Receipt" (
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
    "tuitionFee" REAL NOT NULL,
    "otherFee" REAL NOT NULL,
    "examinationFee" REAL NOT NULL,
    "annualFee" REAL NOT NULL,
    "lateMiscFee" REAL NOT NULL,
    "totalFee" REAL NOT NULL,
    "receivedBy" TEXT NOT NULL,
    "totalInWords" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "dateInWords" TEXT NOT NULL,
    "branch" TEXT NOT NULL
);
