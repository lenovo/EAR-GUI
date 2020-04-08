/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

import Vue from  'vue'

const paramsTree = {
  Custom: ['Database','EARD','EARDBD','EARL','EARGM','Common','Policy','OtherPlugins','Security','SpecialNodes','Island'],
  Quick: ['Database','EARGM','Policy','Island']
}


class ConfigParams {
  constructor() {
    this.ReportLoops = '0';
    this.MariaDBUser = 'eardbd_user';
    this.MariaDBCommandsPassw = 'commandspass';
    this.MariaDBDatabase = 'EAR';
    this.ReportNodeDetail = '1';
    this.MariaDBPort = '3306';
    this.MariaDBIp = '172.30.2.101';
    this.MariaDBPassw = 'eardbd_pass';
    this.MaxConnections = '20';
    this.ReportSigDetail = '1';
    this.MariaDBCommandsUser = 'ear_commands';
    this.NodeForceFrequencies = '1';
    this.NodeUseDB = '1';
    this.NodeDaemonPowermonFreq = '60';
    this.NodeUseLog = '1';
    this.NodeDaemonTurbo = '0';
    this.MinTimePerformanceAccuracy = '10000000';
    this.NodeDaemonVerbose = '1';
    this.NodeDaemonMaxPstate = '1';
    this.NodeDaemonPort = '5000';
    this.NodeUseEARDBD = '1';
    this.DBDaemonPortTCP = '4711';
    this.DBDaemonMemorySizePerType = '40,20,5,24,5,1,5';
    this.DBDaemonPortSecTCP = '4712';
    this.DBDaemonInsertionTime = '30';
    this.DBDaemonAggregationTime = '60';
    this.DBDaemonUseLog = '1';
    this.DBDaemonMemorySize = '120';
    this.DBDaemonSyncPort = '4713';
    this.CoefficientsDir = '/path/to/coeffs';
    this.CheckEARModeEvery = '1000';
    this.LibraryPeriod = '10';
    this.DynaisTimeout = '15';
    this.DynAISLevels = '4';
    this.DynAISWindowSize = '200';
    this.GlobalManagerPolicy = 'MaxEnergy';
    this.GlobalManagerUseLog = '1';
    this.GlobalManagerGracePeriods = '6';
    this.GlobalManagerMode = '0';
    this.GlobalManagerUnits = 'K';
    this.GlobalManagerUseAggregated = '1';
    this.GlobalManagerPeriodT1 = '90';
    this.GlobalManagerPeriodT2 = '259200';
    this.GlobalManagerVerbose = '1';
    this.GlobalManagerPort = '50000';
    this.GlobalManagerWarningsPerc = '85,90,95';
    this.GlobalManagerHost = 'hostname';
    this.GlobalManagerMail = 'nomail';
    this.GlobalManagerEnergyLimit = '550000';
    this.EtcDir = '/path/to/templates';
    this.InstDir = '/path/to/inst';
    this.Verbose = 0;
    this.TmpDir = '/tmp/ear';
    this.DataBasePathName = '/templates/ear/dbs/dbs.';
    this.DefaultPowerPolicy = 'min_time';
    this.policys = [],
    this.PluginEnergy = 'energy_nm';
    this.PluginPowerModel = 'default';
    this.AuthorizedUsers = 'user1,user2';
    this.AuthorizedAccounts = 'acc1,acc2,acc3';
    this.AuthorizedGroups = 'xx,yy';
    this.general_energy_tags = [];
    this.limited_energy_tags = [];
    this.special_nodes = [];
    this.islands = [];
  }

  static parseFromRestApi(jsonObj) {
    var configParams = new ConfigParams();
    configParams._ReportLoops = Number(jsonObj.ReportLoops)?true:false;
    configParams._MariaDBUser = jsonObj.MariaDBUser;
    configParams._MariaDBCommandsPassw = jsonObj.MariaDBCommandsPassw;
    configParams._MariaDBDatabase = jsonObj.MariaDBDatabase;
    configParams._ReportNodeDetail = Number(jsonObj.ReportNodeDetail)?true:false;
    configParams._MariaDBPort = jsonObj.MariaDBPort;
    configParams._MariaDBIp = jsonObj.MariaDBIp;
    configParams._MariaDBPassw = jsonObj.MariaDBPassw;
    configParams._MaxConnections = jsonObj.MaxConnections;
    configParams._ReportSigDetail = Number(jsonObj.ReportSigDetail)?true:false;
    configParams._MariaDBCommandsUser = jsonObj.MariaDBCommandsUser;
    configParams._NodeForceFrequencies = Number(jsonObj.NodeForceFrequencies)?true:false;
    configParams._NodeUseDB = Number(jsonObj.NodeUseDB)?true:false;
    configParams._NodeDaemonPowermonFreq = jsonObj.NodeDaemonPowermonFreq;
    configParams._NodeUseLog = jsonObj.NodeUseLog;
    configParams._NodeDaemonTurbo = Number(jsonObj.NodeDaemonTurbo)?true:false;
    configParams._MinTimePerformanceAccuracy = jsonObj.MinTimePerformanceAccuracy;
    configParams._NodeDaemonVerbose = Number(jsonObj.NodeDaemonVerbose);
    configParams._NodeDaemonMaxPstate = Number(jsonObj.NodeDaemonMaxPstate)?true:false;
    configParams._NodeDaemonPort = jsonObj.NodeDaemonPort;
    configParams._NodeUseEARDBD = Number(jsonObj.NodeUseEARDBD)?true:false;
    configParams._DBDaemonPortTCP = jsonObj.DBDaemonPortTCP;
    configParams._DBDaemonMemorySizePerType = jsonObj.DBDaemonMemorySizePerType;
    configParams._DBDaemonPortSecTCP = jsonObj.DBDaemonPortSecTCP;
    configParams._DBDaemonInsertionTime = jsonObj.DBDaemonInsertionTime;
    configParams._DBDaemonAggregationTime = jsonObj.DBDaemonAggregationTime;
    configParams._DBDaemonUseLog = Number(jsonObj.DBDaemonUseLog)?true:false;
    configParams._DBDaemonMemorySize = jsonObj.DBDaemonMemorySize;
    configParams._DBDaemonSyncPort = jsonObj.DBDaemonSyncPort;
    configParams._CoefficientsDir = jsonObj.CoefficientsDir;
    configParams._CheckEARModeEvery = jsonObj.CheckEARModeEvery;
    configParams._LibraryPeriod = jsonObj.LibraryPeriod;
    configParams._DynaisTimeout = jsonObj.DynaisTimeout;
    configParams._DynAISLevels = jsonObj.DynAISLevels;
    configParams._DynAISWindowSize = jsonObj.DynAISWindowSize;
    configParams._GlobalManagerPolicy = jsonObj.GlobalManagerPolicy;
    configParams._GlobalManagerUseLog = jsonObj.GlobalManagerUseLog;
    configParams._GlobalManagerGracePeriods = jsonObj.GlobalManagerGracePeriods;
    configParams._GlobalManagerMode = jsonObj.GlobalManagerMode;
    configParams._GlobalManagerUnits = jsonObj.GlobalManagerUnits;
    configParams._GlobalManagerUseAggregated = jsonObj.GlobalManagerUseAggregated;
    configParams._GlobalManagerPeriodT1 = jsonObj.GlobalManagerPeriodT1;
    configParams._GlobalManagerPeriodT2 = jsonObj.GlobalManagerPeriodT2;
    configParams._GlobalManagerVerbose = jsonObj.GlobalManagerVerbose;
    configParams._GlobalManagerPort = jsonObj.GlobalManagerPort;
    configParams._GlobalManagerWarningsPerc = jsonObj.GlobalManagerWarningsPerc;
    configParams._GlobalManagerHost = jsonObj.GlobalManagerHost;
    configParams._GlobalManagerMail = jsonObj.GlobalManagerMail;
    configParams._GlobalManagerEnergyLimit = jsonObj.GlobalManagerEnergyLimit;
    configParams._EtcDir = jsonObj.EtcDir;
    configParams._InstDir = jsonObj.InstDir;
    configParams._Verbose = jsonObj.Verbose;
    configParams._TmpDir = jsonObj.TmpDir;
    configParams._DataBasePathName = jsonObj.DataBasePathName;
    configParams._DefaultPowerPolicy = jsonObj.DefaultPowerPolicy;
    configParams._policys = jsonObj.policys;
    configParams._PluginEnergy = jsonObj.PluginEnergy;
    configParams._PluginPowerModel = jsonObj.PluginPowerModel;
    configParams._AuthorizedUsers = jsonObj.AuthorizedUsers;
    configParams._AuthorizedAccounts = jsonObj.AuthorizedAccounts;
    configParams._AuthorizedGroups = jsonObj.AuthorizedGroups;
    configParams._general_energy_tags = jsonObj.general_energy_tags;
    configParams._limited_energy_tags = jsonObj.limited_energy_tags;
    configParams._special_nodes = jsonObj.special_nodes;
    configParams._islands = jsonObj.islands;

    return configParams
  }

  get _ReportLoops() {
    return this.ReportLoops
  }
  set _ReportLoops(ReportLoops) {
    return this.ReportLoops = ReportLoops
  }
  get _MariaDBUser() {
    return this.MariaDBUser
  }
  set _MariaDBUser(MariaDBUser) {
    return this.MariaDBUser = MariaDBUser
  }
  get _MariaDBCommandsPassw() {
    return this.MariaDBCommandsPassw
  }
  set _MariaDBCommandsPassw(MariaDBCommandsPassw) {
    return this.MariaDBCommandsPassw = MariaDBCommandsPassw
  }
  get _MariaDBDatabase() {
    return this.MariaDBDatabase
  }
  set _MariaDBDatabase(MariaDBDatabase) {
    return this.MariaDBDatabase = MariaDBDatabase
  }
  get _ReportNodeDetail() {
    return this.ReportNodeDetail
  }
  set _ReportNodeDetail(ReportNodeDetail) {
    return this.ReportNodeDetail = ReportNodeDetail
  }
  get _MariaDBPort() {
    return this.MariaDBPort
  }
  set _MariaDBPort(MariaDBPort) {
    return this.MariaDBPort = MariaDBPort
  }
  get _MariaDBIp() {
    return this.MariaDBIp
  }
  set _MariaDBIp(MariaDBIp) {
    return this.MariaDBIp = MariaDBIp
  }
  get _MariaDBPassw() {
    return this.MariaDBPassw
  }
  set _MariaDBPassw(MariaDBPassw) {
    return this.MariaDBPassw = MariaDBPassw
  }
  get _MaxConnections() {
    return this.MaxConnections
  }
  set _MaxConnections(MaxConnections) {
    return this.MaxConnections = MaxConnections
  }
  get _ReportSigDetail() {
    return this.ReportSigDetail
  }
  set _ReportSigDetail(ReportSigDetail) {
    return this.ReportSigDetail = ReportSigDetail
  }
  get _MariaDBCommandsUser() {
    return this.MariaDBCommandsUser
  }
  set _MariaDBCommandsUser(MariaDBCommandsUser) {
    return this.MariaDBCommandsUser = MariaDBCommandsUser
  }
  get _NodeForceFrequencies() {
    return this.NodeForceFrequencies
  }
  set _NodeForceFrequencies(NodeForceFrequencies) {
    return this.NodeForceFrequencies = NodeForceFrequencies
  }
  get _NodeUseDB() {
    return this.NodeUseDB
  }
  set _NodeUseDB(NodeUseDB) {
    return this.NodeUseDB = NodeUseDB
  }
  get _NodeDaemonPowermonFreq() {
    return this.NodeDaemonPowermonFreq
  }
  set _NodeDaemonPowermonFreq(NodeDaemonPowermonFreq) {
    return this.NodeDaemonPowermonFreq = NodeDaemonPowermonFreq
  }
  get _NodeUseLog() {
    return this.NodeUseLog
  }
  set _NodeUseLog(NodeUseLog) {
    return this.NodeUseLog = NodeUseLog
  }
  get _NodeDaemonTurbo() {
    return this.NodeDaemonTurbo
  }
  set _NodeDaemonTurbo(NodeDaemonTurbo) {
    return this.NodeDaemonTurbo = NodeDaemonTurbo
  }
  get _MinTimePerformanceAccuracy() {
    return this.MinTimePerformanceAccuracy
  }
  set _MinTimePerformanceAccuracy(MinTimePerformanceAccuracy) {
    return this.MinTimePerformanceAccuracy = MinTimePerformanceAccuracy
  }
  get _NodeDaemonVerbose() {
    return this.NodeDaemonVerbose
  }
  set _NodeDaemonVerbose(NodeDaemonVerbose) {
    return this.NodeDaemonVerbose = NodeDaemonVerbose
  }
  get _NodeDaemonMaxPstate() {
    return this.NodeDaemonMaxPstate
  }
  set _NodeDaemonMaxPstate(NodeDaemonMaxPstate) {
    return this.NodeDaemonMaxPstate = NodeDaemonMaxPstate
  }
  get _NodeDaemonPort() {
    return this.NodeDaemonPort
  }
  set _NodeDaemonPort(NodeDaemonPort) {
    return this.NodeDaemonPort = NodeDaemonPort
  }
  get _NodeUseEARDBD() {
    return this.NodeUseEARDBD
  }
  set _NodeUseEARDBD(NodeUseEARDBD) {
    return this.NodeUseEARDBD = NodeUseEARDBD
  }
  get _DBDaemonPortTCP() {
    return this.DBDaemonPortTCP
  }
  set _DBDaemonPortTCP(DBDaemonPortTCP) {
    return this.DBDaemonPortTCP = DBDaemonPortTCP
  }
  get _DBDaemonMemorySizePerType() {
    return this.DBDaemonMemorySizePerType
  }
  set _DBDaemonMemorySizePerType(DBDaemonMemorySizePerType) {
    return this.DBDaemonMemorySizePerType = DBDaemonMemorySizePerType
  }
  get _DBDaemonPortSecTCP() {
    return this.DBDaemonPortSecTCP
  }
  set _DBDaemonPortSecTCP(DBDaemonPortSecTCP) {
    return this.DBDaemonPortSecTCP = DBDaemonPortSecTCP
  }
  get _DBDaemonInsertionTime() {
    return this.DBDaemonInsertionTime
  }
  set _DBDaemonInsertionTime(DBDaemonInsertionTime) {
    return this.DBDaemonInsertionTime = DBDaemonInsertionTime
  }
  get _DBDaemonAggregationTime() {
    return this.DBDaemonAggregationTime
  }
  set _DBDaemonAggregationTime(DBDaemonAggregationTime) {
    return this.DBDaemonAggregationTime = DBDaemonAggregationTime
  }
  get _DBDaemonUseLog() {
    return this.DBDaemonUseLog
  }
  set _DBDaemonUseLog(DBDaemonUseLog) {
    return this.DBDaemonUseLog = DBDaemonUseLog
  }
  get _DBDaemonMemorySize() {
    return this.DBDaemonMemorySize
  }
  set _DBDaemonMemorySize(DBDaemonMemorySize) {
    return this.DBDaemonMemorySize = DBDaemonMemorySize
  }
  get _DBDaemonSyncPort() {
    return this.DBDaemonSyncPort
  }
  set _DBDaemonSyncPort(DBDaemonSyncPort) {
    return this.DBDaemonSyncPort = DBDaemonSyncPort
  }
  get _CoefficientsDir() {
    return this.CoefficientsDir
  }
  set _CoefficientsDir(CoefficientsDir) {
    return this.CoefficientsDir = CoefficientsDir
  }
  get _CheckEARModeEvery() {
    return this.CheckEARModeEvery
  }
  set _CheckEARModeEvery(CheckEARModeEvery) {
    return this.CheckEARModeEvery = CheckEARModeEvery
  }
  get _LibraryPeriod() {
    return this.LibraryPeriod
  }
  set _LibraryPeriod(LibraryPeriod) {
    return this.LibraryPeriod = LibraryPeriod
  }
  get _DynaisTimeout() {
    return this.DynaisTimeout
  }
  set _DynaisTimeout(DynaisTimeout) {
    return this.DynaisTimeout = DynaisTimeout
  }
  get _DynAISLevels() {
    return this.DynAISLevels
  }
  set _DynAISLevels(DynAISLevels) {
    return this.DynAISLevels = DynAISLevels
  }
  get _DynAISWindowSize() {
    return this.DynAISWindowSize
  }
  set _DynAISWindowSize(DynAISWindowSize) {
    return this.DynAISWindowSize = DynAISWindowSize
  }
  get _GlobalManagerPolicy() {
    return this.GlobalManagerPolicy
  }
  set _GlobalManagerPolicy(GlobalManagerPolicy) {
    return this.GlobalManagerPolicy = GlobalManagerPolicy
  }
  get _GlobalManagerUseLog() {
    return this.GlobalManagerUseLog
  }
  set _GlobalManagerUseLog(GlobalManagerUseLog) {
    return this.GlobalManagerUseLog = GlobalManagerUseLog
  }
  get _GlobalManagerGracePeriods() {
    return this.GlobalManagerGracePeriods
  }
  set _GlobalManagerGracePeriods(GlobalManagerGracePeriods) {
    return this.GlobalManagerGracePeriods = GlobalManagerGracePeriods
  }
  get _GlobalManagerMode() {
    return this.GlobalManagerMode
  }
  set _GlobalManagerMode(GlobalManagerMode) {
    return this.GlobalManagerMode = GlobalManagerMode
  }
  get _GlobalManagerUnits() {
    return this.GlobalManagerUnits
  }
  set _GlobalManagerUnits(GlobalManagerUnits) {
    return this.GlobalManagerUnits = GlobalManagerUnits
  }
  get _GlobalManagerUseAggregated() {
    return this.GlobalManagerUseAggregated
  }
  set _GlobalManagerUseAggregated(GlobalManagerUseAggregated) {
    return this.GlobalManagerUseAggregated = GlobalManagerUseAggregated
  }
  get _GlobalManagerPeriodT1() {
    return this.GlobalManagerPeriodT1
  }
  set _GlobalManagerPeriodT1(GlobalManagerPeriodT1) {
    return this.GlobalManagerPeriodT1 = GlobalManagerPeriodT1
  }
  get _GlobalManagerPeriodT2() {
    return this.GlobalManagerPeriodT2
  }
  set _GlobalManagerPeriodT2(GlobalManagerPeriodT2) {
    return this.GlobalManagerPeriodT2 = GlobalManagerPeriodT2
  }
  get _GlobalManagerVerbose() {
    return this.GlobalManagerVerbose
  }
  set _GlobalManagerVerbose(GlobalManagerVerbose) {
    return this.GlobalManagerVerbose = GlobalManagerVerbose
  }
  get _GlobalManagerPort() {
    return this.GlobalManagerPort
  }
  set _GlobalManagerPort(GlobalManagerPort) {
    return this.GlobalManagerPort = GlobalManagerPort
  }
  get _GlobalManagerWarningsPerc() {
    return this.GlobalManagerWarningsPerc
  }
  set _GlobalManagerWarningsPerc(GlobalManagerWarningsPerc) {
    return this.GlobalManagerWarningsPerc = GlobalManagerWarningsPerc
  }
  get _GlobalManagerHost() {
    return this.GlobalManagerHost
  }
  set _GlobalManagerHost(GlobalManagerHost) {
    return this.GlobalManagerHost = GlobalManagerHost
  }
  get _GlobalManagerMail() {
    return this.GlobalManagerMail
  }
  set _GlobalManagerMail(GlobalManagerMail) {
    return this.GlobalManagerMail = GlobalManagerMail
  }
  get _GlobalManagerEnergyLimit() {
    return this.GlobalManagerEnergyLimit
  }
  set _GlobalManagerEnergyLimit(GlobalManagerEnergyLimit) {
    return this.GlobalManagerEnergyLimit = GlobalManagerEnergyLimit
  }
  get _EtcDir() {
    return this.EtcDir
  }
  set _EtcDir(EtcDir) {
    return this.EtcDir = EtcDir
  }
  get _InstDir() {
    return this.InstDir
  }
  set _InstDir(InstDir) {
    return this.InstDir = InstDir
  }
  get _Verbose() {
    return this.Verbose
  }
  set _Verbose(Verbose) {
    return this.Verbose = Verbose
  }
  get _TmpDir() {
    return this.TmpDir
  }
  set _TmpDir(TmpDir) {
    return this.TmpDir = TmpDir
  }
  get _DataBasePathName() {
    return this.DataBasePathName
  }
  set _DataBasePathName(DataBasePathName) {
    return this.DataBasePathName = DataBasePathName
  }
  get _DefaultPowerPolicy() {
    return this.DefaultPowerPolicy
  }
  set _DefaultPowerPolicy(DefaultPowerPolicy) {
    return this.DefaultPowerPolicy = DefaultPowerPolicy
  }
  get _policys() {
    return this.policys
  }
  set _policys(policys) {
    return this.policys = policys
  }
  get _PluginEnergy() {
    return this.PluginEnergy
  }
  set _PluginEnergy(PluginEnergy) {
    return this.PluginEnergy = PluginEnergy
  }
  get _PluginPowerModel() {
    return this.PluginPowerModel
  }
  set _PluginPowerModel(PluginPowerModel) {
    return this.PluginPowerModel = PluginPowerModel
  }
  get _AuthorizedUsers() {
    return this.AuthorizedUsers
  }
  set _AuthorizedUsers(AuthorizedUsers) {
    return this.AuthorizedUsers = AuthorizedUsers
  }
  get _AuthorizedAccounts() {
    return this.AuthorizedAccounts
  }
  set _AuthorizedAccounts(AuthorizedAccounts) {
    return this.AuthorizedAccounts = AuthorizedAccounts
  }
  get _AuthorizedGroups() {
    return this.AuthorizedGroups
  }
  set _AuthorizedGroups(AuthorizedGroups) {
    return this.AuthorizedGroups = AuthorizedGroups
  }
  get _general_energy_tags() {
    return this.general_energy_tags
  }
  set _general_energy_tags(general_energy_tags) {
    return this.general_energy_tags = general_energy_tags
  }
  get _limited_energy_tags() {
    return this.limited_energy_tags
  }
  set _limited_energy_tags(limited_energy_tags) {
    return this.limited_energy_tags = limited_energy_tags
  }
  get _special_nodes() {
    return this.special_nodes
  }
  set _special_nodes(special_nodes) {
    return this.special_nodes = special_nodes
  }
  get _islands() {
    return this.islands
  }
  set _islands(islands) {
    return this.islands = islands
  }


}

function uploadConfFile(file) {
  return new Promise(function (resolve, reject) {
    var config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    Vue.axios.post('/api/ear/conf/upload/', file, config).then(res => {
      resolve(ConfigParams.parseFromRestApi(res.data));
    }).catch(err => {
      reject(err);
    })
  })
}

function getParams() {
  return new Promise( function(resolve, reject){
    Vue.axios.get('/api/ear/conf/template/').then(res => {
      resolve(ConfigParams.parseFromRestApi(res.data));
    }).catch(err => {
      reject(err);
    })
  }) 
}

function processReqData(data) {
  var obj = {};
  var list = ['ReportLoops', 'ReportNodeDetail', 'ReportSigDetail', 'NodeUseDB', 'NodeDaemonTurbo', 'NodeForceFrequencies', 'NodeDaemonMaxPstate', 'NodeUseEARDBD', 'DBDaemonUseLog'];
  for(var key in data) {
    if(list.includes(key)) {
      obj[key] = data[key]?'1':'0';
    } else {
      obj[key] = data[key];
    }
  }
  return obj
}

function createConfFileByParams(data) {
  return new Promise((resolve, reject) => {
    var req = {params: processReqData(data)};
    Vue.axios.post('/api/ear/conf/', req).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

function getConfigFile(filename) {
  return new Promise((resolve, reject) => {
    var config = {
      responseType: 'blob'
    }
    Vue.axios.get(`/ear/download/${filename}`).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

export default {
  ConfigParams,
  paramsTree,
  uploadConfFile,
  getParams,
  createConfFileByParams,
  getConfigFile
}
