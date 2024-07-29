// object id for each mode
const allProperty = {
    deviceInfo: {
        manufacturer: '/3/0/0',
        modelNumber: '/3/0/1',
        serialNumber: '/3/0/2',
        firmwareVersion: '/3/0/3',
        reboot: '/3/0/4',
        factoryReset: '/3/0/5',
        availablePowerSources: '/3/0/6',
        powerSourceVoltage: '/3/0/7',
        powerSourceCurrent: '/3/0/8',
        batteryLevel: '/3/0/9',
        memoryFree: '/3/0/10',
        errorCode: '/3/0/11',
        resetErrorCode: '/3/0/12',
        currentTime: '/3/0/13',
        UTCOffset: '/3/0/14',
        timezone: '/3/0/15',
        supportedModes: '/3/0/16',
        deviceType: '/3/0/17',
        hardwareVersion: '/3/0/18',
        softwareVersion: '/3/0/19',
        batteryStatus: '/3/0/20',
        memoryTotal: '/3/0/21',  
        CPUShare: '/40006/0/27500'
    },
    
    firmwareUpdate: {
        package: '/5/0/0',
        packageURI: '/5/0/1',
        update: '/5/0/2',
        state: '/5/0/3',
        updateResult: '/5/0/5',
        pkgName: '/5/0/6',
        pkgVersion: '/5/0/7',
        firmwareUpdateProtocolSupport: '/5/0/8',
        firmwareUpdateDeliveryMethod: '/5/0/9',
        protocal: '/5/1/8',
        baseURL: '/5/1/1',
        boardname: '/5/1/0',
        bspversion: '/5/1/7',
        
    },
    
    location: {
        latitude: '/6/0/0',
        longitude: '/6/0/1',
        altitude: '/6/0/2',
        radius: '/6/0/3',
        velocity: '/6/0/4',
        timestamp: '/6/0/5',
        speed: '/6/0/6',
    },
    
    lock: {
        state: '/8/0/0',
        lockTarget: '/8/0/1',
        wipeitem: '/8/0/2',
        wipe: '/8/0/3',
        wipeTarget: '/8/0/4',
        lockOrWipe: '/8/0/5',
    },
    
    androidDeviceControl: {
        wifi: '/40001/0/27000',
        bluetooth: '/40001/0/27001',
        brightness: '/40001/0/27002',
        systemVersion: '/40001/0/27003',
        boardName: '/40001/0/27004',
        systemModel: '/40001/0/27005',
        agentVersion: '/40001/0/27006',
        bspVersion: '/40001/0/27007',
        platform: '/40001/0/27008',
        deviceName: "/40001/0/27009",
    },
    
    androidSystemControl: {
        autorotation: '40002/0/27100',
        largetext: '/40002/0/27101',
    },
    
    androidInterfaceControl: {
        homeKey: '/40003/0/27200',
        backKey: '/40003/0/27201',
        timeicon: '/40003/0/27202',
        navigationBarColor: '/40003/0/27203',
    },
    
    androidAppControl: {
        appinfopage: '/40004/0/27300',
        getAllAppInfo: '/40004/0/27301',
        enableApp: '/40004/0/27302',
        disableApp: '/40004/0/27303',
        installLocalApp: '/40004/0/27304',
        uninstallApp: '/40004/0/27305',
        startApp: '/40004/0/27306',
        downloadSomeFile: '/40004/0/27307',
        installApp: '/40004/0/27308',
        isRunning: '/40004/0/27316'
    },

    androidSecurityControl: {
        lockScreen: '/40005/0/27400',
        adb: '/40005/0/27401',
        startVncServer: '/40005/0/27402',
        stopVncServer: '/40005/0/27403'
    }, 
}

// get device Detail circle exec in device list
const deviceDetail = {
    manufacturer: '/3/0/0',
    systemVersion: '/40001/0/27003',
    boardName: '/40001/0/27004',
    serialNumber: '/3/0/2',
    agentVersion: '/40001/0/27006',
    deviceDetails: '/3/0/23',

    networkSpeed: "/3/0/24",
    networkInfo: "/3/0/25",
    pwm: "/3/0/26",
    gpio: "/3/0/27",
    setSignInfo: "/3/0/28"
}
//device monitor
const deviceMonitor = {
    memoryFree: '/3/0/10',
    memoryTotal: '/3/0/21',
    getPortStatus: '/3/0/22',
    globleTimeout: '/1/0/3',
    cpuShare: '/40006/0/27500'
}
//remote control
const androidControl = {
    wifi: '/40001/0/27000',
    bluetooth: '/40001/0/27001',
    agentLog: "/40001/0/27012",  
    offline: "/40001/0/27013",
    lockInfo: "/40001/0/27014",
    lockDevice: "/40001/0/27015",
    unlockDevice: "/40001/0/27016",
    brightness: '/40001/0/27002',
    //The client does not send messages to server
    sleepAgent: "/40001/0/27020",
    awakenAgent: "/40001/0/27021",
    
    homeKey: '/40003/0/27200',
    backKey: '/40003/0/27201',
    kiosk: '/40003/0/27204',
    bootanimation: '/40003/0/27205',
    lockScreen: '/40005/0/27400',
    adb: '/40005/0/27401',
    startVncServer: '/40005/0/27402',
    stopVncServer: '/40005/0/27403',
    reboot: '/3/0/4',
     //whitelist management
    whitelist: '/40005/0/27404'
}
//app control
const appControl = {
    appinfopage: '/40004/0/27300',
    getThirdAppInfo: '/40004/0/27301',
    getAllAppInfo: '/40004/0/27310',
    enableApp: '/40004/0/27302',
    disableApp: '/40004/0/27303',
    installLocalApp: '/40004/0/27304',
    uninstallApp: '/40004/0/27305',
    startApp: '/40004/0/27306',
    stopApp: '/40004/0/27309',
    downloadSomeFile: '/40004/0/27307',
    installApp: '/40004/0/27308',
    upgradeApp: '/40004/0/27308',
    //whitelist management
    addWhitelist: '/40004/0/27311',
    removeWhitelist: '/40004/0/27312',
    preInstallApp: '/40004/0/27313',
    setKiosk: "/40004/0/27314",
    cancelKiosk: "/40004/0/27315",
    isRunning: '/40004/0/27316',
    screenShot: '/40005/0/27405',
    startScreenShot: '/40005/0/27406',

    screenRecordingState: "/40005/0/27407",
    startScreenRecording: "/40005/0/27408",
    stopScreenRecording: "/40005/0/27409",
    getVncStatus: "/40005/0/27410",

    //device on profile
    deviceOnProfileInstall: "/40004/0/30001",
    deviceOnProfileUninstall: "/40004/0/30002"
}
//remote control exec device
const actionDevice= {
    reboot: '/3/0/4',
    updateBSP: '/5/1/2',
    systemSetting: '/5/1/20',
    cancelSystemSetting: '/5/1/21'
}


// get bsp info circle exec
const bspUpdate = {
    systemVersion: '/40001/0/27003',
    boardName: '/40001/0/27004',
    bspVersion: '/40001/0/27007',
    platform: '/40001/0/27008',
}


// exec bsp write circle exec
const bspInfoWrite = {
    deployName: '/5/1/6',
    updateBSPVersion: '/5/1/7',
    bspRootUrl: '/5/1/1' 
}

//vnc server
const vncServer = {
    startVncServer: '/40005/0/27402',
    stopVncServer: '/40005/0/27403',
}

const npsControl={
    startNpc: "/40005/0/28400",
    stopNpc: "/40005/0/28401"
}

const workorder = {
    preInstallApp: '/40004/0/27313',
    kiosk: '/40003/0/27204',
    bootanimation: '/40003/0/27205',
    // linux
    installDockerCompose: "/70001/0/27300",
    installDockerSwarm: "/70001/0/27302",
    installLinuxPkg: "/70001/0/27301",
    //windows
    installExe: "/70001/0/28300",
    installZip: "/70001/0/28301"
}
const deviceInfo = {
    deviceName: "/40001/0/27009",
    deviceCapacity: "/40001/0/27010"
}
const fileDeploy = {
    deployFile: "/40003/0/27206"
}

const winPkgControl = {
    getExeInfo: "/50001/0/27300",
    installExe: "/50001/0/27301",
    uninstallExe: "/50001/0/27302",
    upgradeExe: "/50001/0/27303",
    startExe: "/50001/0/27304",
    stopExe: "/50001/0/27305",
    restartExe: "/50001/0/27306",

    getPkgInfo: "/50001/0/28300",
    installPkg: "/50001/0/28301",
    uninstallPkg: "/50001/0/28302",
    upgradePkg: "/50001/0/28303",
    startPkg: "/50001/0/28304",
    stopPkg: "/50001/0/28305",
    restartPkg: "/50001/0/28306",

    //device on profile
    deviceOnProfileInstall: "/50001/0/30001",
    deviceOnProfileUninstall: "/50001/0/30002"
}

const dockerControl = {
    getDockerInfo: "/60001/0/27300",
    install: "/60001/0/27301",
    uninstall: "/60001/0/27302",
    upgrade: "/60001/0/27301",

    installSwarm: "/60001/0/27401",
    uninstallSwarm: "/60001/0/27402",
    upgradeSwarm: "/60001/0/27401",
    switchSwarmCapacity: "/60001/0/27403"
}
const linuxPkgControl = {
    getPkgInfo: "/60001/0/28300",
    install: "/60001/0/28301",
    uninstall: "/60001/0/28302",
    upgrade: "/60001/0/28301",
    startDeb: "/60001/0/28304",
    stopDeb: "/60001/0/28305",
    restartDeb: "/60001/0/28306",
    startTar: "/60001/0/28307",
    stopTar: "/60001/0/28308",
    restartTar: "/60001/0/28309",

    //device on profile
    deviceOnProfileInstall: "/60001/0/30001",
    deviceOnProfileUninstall: "/60001/0/30002"
}
const dockerAction = {
    getInfo: "/60002/0/1000",
    getCompose: "/60002/0/1001",

    getContainers: "/60002/0/1003",
    getImages: "/60002/0/1004",
    getContainerLog: "/60002/0/1005",
    getContainerInspect: "/60002/0/1006",
    getDockerStats: "/60002/0/1007",
    getDockerTop: "/60002/0/1008",
    startContainer: "/60002/0/1009",
    stopContainer: "/60002/0/1010",
    restartContainer: "/60002/0/1011",
    killContainer: "/60002/0/1012",
    pauseContainer: "/60002/0/1013",
    resumeContainer: "/60002/0/1014",
    removeContainer: "/60002/0/1015",
    removeImage: "/60002/0/1016",
    stopCompose: "/60002/0/1017",
    startCompose: "/60002/0/1018",
    restartCompose: "/60002/0/1019",
    getComposeContent: "/60002/0/1020",
    forceRemoveImage: "/60002/0/1021",
    containerMonitor: "/60002/0/1022",
    // getContainerMemory: "/60002/0/1023",
    // getContainerNetwork: "/60002/0/1024",
    getContainerProcess: "/60002/0/1025",
    updateComposeContent: "/60002/0/1026",

    getServiceDetails: "/60002/0/1030",
    getService: "/60002/0/1031",
    removeService: "/60002/0/1032",
    updateServiceReplicas: "/60002/0/1033",
    // updateServiceReplica: "/60002/0/1029",
    updateServiceImage: "/60002/0/1034",

    updateSwarmContent: "/60002/0/1035",
    
    stopSwarm: "/60002/0/1036",
    startSwarm: "/60002/0/1037",
    restartSwarm: "/60002/0/1038",

    getServiceLog: "/60002/0/1039",
    getServiceInspect: "/60002/0/1040",
}
const extendAction={
    getAction: "/40007/0/27600",
    setAction: "/40007/0/27601"
}

const codesys = {
    deviceInfo: "/80001/0/1001",
    appInfo: "/80001/0/1002",
    startApp: "/80001/0/1003",
    stopApp: "/80001/0/1004",
    warmApp: "/80001/0/1005",
    coldApp: "/80001/0/1006",
    originApp: "/80001/0/1007",
    deployFile: "/80001/0/1008",
    reloadApp: "/80001/0/1009",

    login: "/80001/0/1010",
    startPLC: "/80001/0/1011",
    stopPLC: "/80001/0/1012",
    PLCStatus: "/80001/0/1013"
}

export {
    allProperty,
    deviceDetail,
    deviceMonitor,
    androidControl,
    appControl,
    actionDevice,
    bspUpdate,
    bspInfoWrite,
    vncServer,
    workorder,
    deviceInfo,
    fileDeploy,
    winPkgControl,
    dockerDeploy,
    linuxPkgControl,
    dockerControl,
    dockerAction,
    npsControl,
    codesys,
    extendAction
}


