const mssqlConnector = require('./mssql-connector');
const documentdbConnector = require('./documentdb-connector');

module.exports = (() => {
  const dataSourceTypes = [
    'mssql',
    'mongodb',
    'documentdb'
  ];

  const getDataSourceTypes = () => {
    return dataSourceTypes;
  };

  const testConnection = (connectionOptions, callback) => {
    switch (connectionOptions.dataSourceType) {
      case 'mssql':
        mssqlConnector.testConnection(connectionOptions, callback);
        break;
      case 'documentdb':
        documentdbConnector.testConnection(connectionOptions, callback);
        break;
      default:
        callback(new Error(`unknown data source type ${connectionOptions.dataSoureType}`));
        break;
    }
  };

  const execute = (connectionOptions, actionOptions, callback) => {
    switch (connectionOptions.dataSourceType) {
      case 'mssql':
        mssqlConnector.execute(connectionOptions, actionOptions, callback);
        break;
      case 'documentdb':
        documentdbConnector.execute(connectionOptions, actionOptions, callback);
        break;
      default:
        callback(new Error(`unknown data source type ${connectionOptions.dataSourceType}`));
        break;
    }
  };

  return {
    getDataSourceTypes,
    testConnection,
    execute
  };
})();