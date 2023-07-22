'use strict';

import mongoose from './index.model'

const Schema  = mongoose.Schema;



const querySchema = new Schema({
  domainName: {type: String},
  logRecord: {type: String},
}, { timestamps: true });


// const querySchema = new Schema({
//   domainName: {type: String},
//   registryDomainId: {type: String},
//   registrarWhoisServer: {type: String},
//   registrarUrl: {type: String},
//   updatedDate: {type: String},
//   creationDate: {type: String},
//   registryExpirationDate: {type: String},
//   registrar: {type: String},
//   registrarIanaId: {type: String},
//   registrarAbuseContactEmail: {type: String},
//   registrarAbuseContactPhone: {type: String},
//   domainStatus: {type: String},
//   nameServer1: {type: String},
//   nameServer2: {type: String},
//   dnssec: {type: String},
//   urlOfTheIcannWhoisInaccuracyComplaintForm: {type: String},
//   lastUpdateOfWhoisDatabase: {type: String},
// }, { timestamps: true });

const QueryModel = mongoose.model('Query', querySchema);

export default QueryModel;