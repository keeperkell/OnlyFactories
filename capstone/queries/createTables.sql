CREATE TABLE IF NOT EXISTS FactoryOrders (
	orderID BIGINT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    fullName VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    orderStatus VARCHAR(15), 
    transactionID BIGINT UNSIGNED UNIQUE,
    quantityRED INT UNSIGNED NOT NULL,
    quantityBLUE INT UNSIGNED NOT NULL,
    quantityWHITE INT UNSIGNED NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Inventory(
    quantityRed INT UNSIGNED NOT NULL,
    quantityBLUE INT UNSIGNED NOT NULL,
    quantityWHITE INT UNSIGNED NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS CustomerAccounts(
    accountID BIGINT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phone INT UNSIGNED,
    accountType VARCHAR(15) NOT NULL
);

CREATE TABLE IF NOT EXISTS FactoryStatus(
    factory_status VARCHAR(15) NOT NULL,
    current_job INT UNSIGNED NOT NULL,
    job_queue_len INT UNSIGNED NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS FactoryJobs(
    jobID BIGINT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    orderID BIGINT UNSIGNED NOT NULL,
    disk_color VARCHAR(10) NOT NULL,
    jobStatus VARCHAR(15) NOT NULL
);

CREATE TABLE IF NOT EXISTS Transactions(
    transactionID BIGINT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    orderID BIGINT UNSIGNED UNIQUE NOT NULL,
    orderTotal FLOAT, 
    ccNumber INT NOT NULL,
    ccExp VARCHAR(8) NOT NULL
);

CREATE TABLE IF NOT EXISTS mqttMessages(
    mqttID BIGINT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    factoryStatus VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS ItemPrice(
    disk_color VARCHAR(10) NOT NULL,
    cust_price FLOAT NOT NULL,
    prod_cost FLOAT NOT NULL,
);