"""
Copyright © 2020-present Lenovo
This file is licensed under both the BSD-3 license for individual/non-commercial use and
EPL-1.0 license for commercial use. Full text of both licenses can be found in
COPYING.BSD and COPYING.EPL files.
"""

base = {
    "MariaDBIp": "172.30.2.101",
    "MariaDBPort": "3306",
    "MariaDBUser": "ear_daemon",
    "MariaDBPassw": "eardbd_pass",
    "MariaDBCommandsUser": "ear_command",
    "MariaDBCommandsPassw": "commandpass",
    "MariaDBDatabase": "EAR",
    "MaxConnections": "20",
    "ReportNodeDetail": "1",
    "ReportSigDetail": "1",
    "ReportLoops": "0",

    "NodeForceFrequencies": "1",
    "NodeUseDB": "1",
    "NodeDaemonPowermonFreq": "60",
    "NodeUseLog": "1",
    "NodeDaemonTurbo": "0",
    "MinTimePerformanceAccuracy": "10000000",
    "NodeDaemonVerbose": "1",
    "NodeDaemonMaxPstate": "1",
    "NodeDaemonPort": "5000",
    "NodeUseEARDBD": "1",

    "DBDaemonPortTCP": "4711",
    "DBDaemonMemorySizePerType": "40,20,5,24,5,1,5",
    "DBDaemonPortSecTCP": "4712",
    "DBDaemonInsertionTime": "30",
    "DBDaemonAggregationTime": "60",
    "DBDaemonUseLog": "1",
    "DBDaemonMemorySize": "120",
    "DBDaemonSyncPort": "4713",

    "CoefficientsDir": "/path/to/coeffs",
    "CheckEARModeEvery": "1000",
    "LibraryPeriod": "10",
    "DynaisTimeout": "15",
    "DynAISLevels": "4",
    "DynAISWindowSize": "200",

    "GlobalManagerPolicy": "MaxEnergy",
    "GlobalManagerUseLog": "1",
    "GlobalManagerGracePeriods": "6",
    "GlobalManagerMode": "0",
    "GlobalManagerUnits": "K",
    "GlobalManagerUseAggregated": "1",
    "GlobalManagerPeriodT1": "90",
    "GlobalManagerPeriodT2": "259200",
    "GlobalManagerVerbose": "1",
    "GlobalManagerPort": "50000",
    "GlobalManagerWarningsPerc": "85,90,95",
    "GlobalManagerHost": "hostname",
    "GlobalManagerMail": "nomail",
    "GlobalManagerEnergyLimit": "550000",

    "EtcDir": "/path/to/templates",
    "InstDir": "/path/to/inst",
    "Verbose": "0",
    "TmpDir": "/tmp/ear",
    "DataBasePathName": "/templates/ear/dbs/dbs.",

    "DefaultPowerPolicy": "min_time",
    "policys": [
        {
            "Policy": "monitoring",
            "Settings": "0",
            "DefaultFreq": "1.5",
            "Privileged": "0"
        },
        {
          "Policy": "min_time",
          "Settings": "0.7",
          "DefaultFreq": "1.8",
          "Privileged": "0"
        },
        {
          "Policy": "min_energy",
          "Settings": "0.1",
          "DefaultFreq": "1.5",
          "Privileged": "0"
        }
    ],

    "PluginEnergy": "energy_nm",
    "PluginPowerModel": "default",

    "AuthorizedUsers": "user1,user2",
    "AuthorizedAccounts": "acc1,acc2,acc3",
    "AuthorizedGroups": "xx,yy",
    "general_energy_tags": [
        {
          "EnergyTag": "cpu-intensive",
          "pstate": "1"
        }
    ],
    "limited_energy_tags": [
        {
          "EnergyTag": "memory-intensive",
          "pstate": "4",
          "users": "user1,user2",
          "groups": "group1,group2",
          "accounts": "acc1,acc2"
        }
    ],

    "special_nodes": [
        {
          "NodeName": "nodename_list",
          "CPUs": "24",
          "DefaultPstates": "2,5,5",
          "DefCoefficientsFile": "filename"
        }
    ],

    "islands": [
        {
          "Island": "0",
          "Nodes": "nodename_list",
          "DBIP": "EARDB_server_hostname",
          "DBSECIP": "EARDB_mirror_hostname",
          "min_power": "50",
          "max_power": "800",
          "error_power": "1000",
          "max_temp": "120"
        }
    ]
}
