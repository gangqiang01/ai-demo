//application title name
const APPLICATIONTITLE = "WISE-PaaS/AppHub Manager";

//footer release time
const RELEASEDATE ="20240118";
const POWER = "WISE-PaaS";
const VERSION ="Version 2.1.0";

//show system app in app market
const SHOWSYSTEMAPPARRAY = ["com.schneiderelectric.kioskcontainer", "com.adv.client", "com.advantech.edgeoncode"];

// forbit uninstall app names
const DISABLEAPPARRAY = ["com.adv.client", "com.advantech.edgeoncode"];
const DISABLEPKGARRAY = ["AppHub-Edge"]

//file format in file deploy
const BOOTANIMATIONTYPE = "bootanimation"
const FILETYPE = "deploy"
//file format in deploy file
const FILEFORMAT = {
    img: "img",
    video: "video",
    audio: "audio",
    pkg: "package",
    cdsApp: "cdsapp",
    other: "other"
}

//app install type
const SINGLE_INSTALL_TYPE = "sg";
const BATCH_INSTALL_TYPE = "bt";
const BATCH_EXEC_TYPE = "appbt"
const BATCH_WL_TYPE = "wlbt";
const BATCH_FILE_TYPE = "fdbt";
const SINGLE_FILE_TYPE = "fdsg";
const SYSTEM_SETUP_BATCH = "ssb";
const SOFTWARE_MONITOR_BATCH = "smb";

const SINGLE_WIN_PKG_TYPE = "winsg";
const BATCH_WIN_PKG_TYPE = "winbt";

const SINGLE_DOCKER_TYPE = "dksg";
const BATCH_DOCKER_TYPE = "dkbt";
const SINGLE_COMPOSE_TYPE = "dcsg";
const SINGLE_CONTAINER_TYPE = "ctsg";
const SINGLE_IMAGE_TYPE = "imsg";
const SINGLE_SERVICE_TYPE = "svsg";
const BATCH_COMPOSE_TYPE = "dcbt";
const BATCH_CONTAINER_TYPE = "ctbt";
const BATCH_IMAGE_TYPE = "imbt";
const SINGLE_DEB_TYPE = "debsg";
const BATCH_DEB_TYPE = "debbt"

const SINGLE_CDS_TYPE = "cdssg";
const BACTH_CDS_TYPE = "cdsbt";


const WIN_PKG_EXE = "exe";
const WIN_PKG_ZIP = "zip";
//solution app type  (package name)
const BATCH_SYSTEM_SETTINGS_TYPE = "com.advantech.securepolicysetting";
//2M
const SOLUTION_ICON_SIZE = 1024*1024*2;

// eventMsg
const TYPEARRAY = [0,1,2];
//plugin 
const PLUGINNAME = "devicecontrol";
//group type
const GROUPTYPE = {
    android: "android",
    linux: "linux",
    windows: "windows",
    mix: "mix"
}
//downloadBaseUrl
const DOWNLOADBASEURL = "https://portal-astore-androiddm-eks001.hz.wise-paas.com.cn";

//baiducloud download agent
const ADDRESS =  "https://pan.baidu.com/s/1kuqIMkCbecQVIyGYrXUtyg";
const FETCHCODE =  "xian";
//google drive download agent
const GOOGLEADDRESS = "https://drive.google.com/drive/folders/1ijrMNZEtBwX1auGMGfCRlcl2l9r0etTV?usp=sharing";
//menu function config
const FUNCTIONMENU = [
    {label: "home.androidapp", value: "appdeploy", os: ["android"], default: true}, 
    {label: "home.docker", value:"dockerdeploy", os: ["linux", "windows"], default: true},
    {label: "home.winPackage", value: "winpkgdeploy", os: ["windows"], default: true} , 
    {label: "home.linuxPackage", value: "linuxpkgdeploy", os: ["linux"], default: true},
    {label: "home.deployFile", value: "filedeploy", os: ["mix"], default: true}, 
    {label: "home.appControl", value: "appcontrol", os: ["android"], default: true}, 
    {label: "home.appSecurity", value: "appsecurity", os: ["android"], default: true},
    {label: "home.dockerControl", value: "dockercontrol", os: ["linux", "windows"], default: true},
    {label: "home.remoteControl", value: "remotecontrol", os: ["mix"], default: true},
    {label: "home.wordorderList", value: "workorder", os: ["mix"], default: true},
    {label: "home.systemUpdate", value: "osupdate", os: ["mix"], default: true},
    { label: "home.remoteDesktop", value: "remotedesktop", os: ["mix"], default: true },
    { label: "home.screenMonitoring", value: "screenMonitoring", os: ["mix"], default: true },
    { label: "home.codesysManager", value: "codesysmanager", os: ["windows"], default: false },
    { label: "home.eventAlert", value: "eventAlert", os: ["linux", "windows"], default: true },
    { label: "home.monitorAlert", value: "monitorAlert", os: ["mix"], default: true },
    { label: "home.ruleLinkage", value: "ruleLinkage", os: ["linux", "windows"], default: true },
    { label: "home.dataForward", value: "dataForward", os: ["linux", "windows"], default: true },
];

//system setting
const ANDROID_SYSTEMSETTING = {
    bluetooth_enable: false,
    wifi_enable: true,
    wifis:[{
        ssid: "",
        password: ""
    }],      
    //   #location_on设定方式同location_mode
    //   #value 0: off.   
    //   #value 3: on/high accuracy.

    // location_on: 0,

    //   #value: 1-3
    //   #value 1: sensors only.
    //   #value 2: battery saving.
    //   #value 3: on/high accuracy.
    location_mode: 3,  
    develop_settings_enable: false,
    not_lock_screen_when_charging: false,
    //   # s: {0, 15, 30, 60, 120, 300, 600, 1800}
    //   # {never, 15s, 30s, 1min, 2min, 5min, 10min, 30min}
    screen_timeout: 60,
    auto_time_timezone: true,
    adaptive_brightness: true,
    //   # [0-100] eg: 30 means 30%,
    brightness_value: 82,
    //   # [0-100] eg: 30 means 30%,
    volume_value: 33,
    auto_rotate_screen: false,
    screen_lock_none_when_device_not_secure: false,
    password_min_length: 0,
    password_complex: 0,
    disallow_trust_agent: false,
    disallow_debugging: false,
    disallow_usb_transfer: false,
    disallow_usb_hid: false,
    disallow_bluetooth: false,
    security_logging_enable: false,
    disallow_autofill: false,
    disallow_secure_notification: false,
    disallow_config_screen_timeout: false,
    //   # s: {0, 15, 30, 60, 120, 300, 600, 1800}
    //    {never, 15s, 30s, 1min, 2min, 5min, 10min, 30min}

    // max_time_to_lock: 0,
    disable_screen_capture: false,
    disable_camera: false,
    disallow_config_date_time: false,
    disallow_share_location: false,
    disallow_unmute_microphone: false,
    mute_and_disallow_adjust_volume: false,
    wifi_device_owner_configs_lockdown: false,
    disallow_config_wifi: false  
};

//location_mode
const LOCATIONMODEOPTIONS = [{
    value: 1,
    label: "systemSettings.sensorsOnly"
},{   
    value: 2,
    label: "systemSettings.batterySaving"
},{
    value: 3,
    label: "systemSettings.highAccuracy"
},{
    value: 0,
    label: "systemSettings.off"
}];

//screen timeout
const SCREENTIMEOUTOPTIONS = [{
    value: 15,
    label: "15 seconds",
    disabled: false
},{
    value: 30,
    label: "30 seconds",
    disabled: false
},{
    value: 60,
    label: "1 minute",
    disabled: false
},{
    value: 120,
    label: "2 minutes",
    disabled: false
},{
    value: 300,
    label: "5 minutes",
    disabled: false
},{
    value: 600,
    label: "10 minutes",
    disabled: false
},{
    value: 1800,
    label: "30 minutes",
    disabled: false
},{
    value: 0,
    label: "never",
    disabled: false
}];

//password_complex option
const COMPLEXOPTIONS= [{
    value: 0,
    label: "UNSPECIFIED"
},
{
    value: 1,
    label: "BIOMETRIC_WEAK"
},{
    value: 2,
    label: "SOMETHING"
},{
    value: 3,
    label: "NUMERIC"
},{
    value: 4,
    label: "NUMERIC_COMPLEX"
},{
    value: 5,
    label: "ALPHABETIC"
},{
    value: 6,
    label: "ALPHANUMERIC"
},{
    value: 7,
    label: "COMPLEX"
},{
    value: 8,
    label: "MANAGED"
}];


const TCP = "tcp";
const HTTP = "http";

const PROTOCOLTYPE={
    executor: "executor",
    modbus: "modbus",
    restful: "restful",
    snmp: "snmp",
    demo: "demo",
    susi: "SUSI-API",
    monitor: "monitor",
    opcua: "opcua",
    iec104: "iec104",
    s7:"s7"
}

//model
const MODELITEM={
    deviceModel: "deviceModel",
    module: "module",
    property: "property",
    event: "event",
    command: "command"
}
//topo device model info
const MODELITEMINFO = [
    {name: "deviceModel", color: "#019FF3", icon: "fa fa-cubes"},
    {name: "module", color: "#f0ad4e", icon: "fa fa-cube"},
    {name: "property", color: "#5cb85c", icon: "fa fa-plug"},
    {name: "event", color: "#d9534f", icon: "fa fa-podcast"},
    {name: "command", color: "#9170E4", icon: "fa fa-terminal"}
]
//topo device info
const DEVICETOPOITEM = {
    service: "service",
    group: "group",
    device: "device",
    subDevice: "subDevice"
}
const DEVICETOPOINFO = [
    {name: "service", color: "#019FF3", icon: "fa fa-server"},
    {name: "group", color: "#f0ad4e", icon: "fa fa-object-group"},
    {name: "device", color: "#5cb85c", icon: "fa fa-window-maximize"},
    {name: "subDevice", color: "#d9534f", icon: "fa fa-window-restore"}
]

const SYSTEMCONFIGTYPE = {
    email: "email",
    dingding: "dingding",
    notification: "notification"
}

const ALERTLOGTYPE = {
    event: "event",
    monitor: "monitor"
}

const DATAFORWARD = {
    amqp: "amqp",
    mqtt: "mqtt",
    kafka:"kafka"
}

const FUNCTIONID = {
    process: "process",
    cpuUsage: "cpuUsage",
    memUsage: "memUsage",
    diskUsage:"diskUsage",
    cpuTemp: "cpuTemp"
}

export {
    APPLICATIONTITLE as applicationTitle,
    SHOWSYSTEMAPPARRAY as showSystemAppArray,
    DISABLEAPPARRAY as disableAppArray,
    RELEASEDATE as releaseDate,
    POWER as power,
    SINGLE_INSTALL_TYPE as singleInstallType,
    BATCH_INSTALL_TYPE as batchInstallType,
    BATCH_WL_TYPE as batchWlType,
    BATCH_FILE_TYPE as batchFileType,
    SINGLE_FILE_TYPE as singleFileType,
    SINGLE_WIN_PKG_TYPE as singleWinPkgType,
    BATCH_WIN_PKG_TYPE as batchWinPkgType,
    BOOTANIMATIONTYPE as bootanimationType,
    FILETYPE as fileType,
    FILEFORMAT as fileFormat,
    SOLUTION_ICON_SIZE as solutionIconSize,
    TYPEARRAY as typeArray,
    VERSION as version,
    SYSTEM_SETUP_BATCH as systemSetupBatch,
    SOFTWARE_MONITOR_BATCH as softwareMonitorBatch,
    GROUPTYPE as groupType,
    SINGLE_DOCKER_TYPE as singleDockerType,
    BATCH_DOCKER_TYPE as batchDockerType,
    DOWNLOADBASEURL as downloadBaseUrl,
    SINGLE_DEB_TYPE as singleDebType,
    BATCH_DEB_TYPE as batchDebType,
    WIN_PKG_EXE as winPkgExe,
    WIN_PKG_ZIP as winPkgZip,
    BATCH_EXEC_TYPE as batchAppType,
    ADDRESS as address,
    FETCHCODE as fetchcode,
    PLUGINNAME as pluginname,
    SINGLE_COMPOSE_TYPE as singleComposeType,
    SINGLE_CONTAINER_TYPE as singleContainerType,
    SINGLE_IMAGE_TYPE as singleImageType,
    BATCH_COMPOSE_TYPE as batchComposeType,
    BATCH_CONTAINER_TYPE as batchContainerType,
    BATCH_IMAGE_TYPE as batchImageType,
    SINGLE_SERVICE_TYPE as singleServiceType,
    FUNCTIONMENU as functionMenu,
    DISABLEPKGARRAY as disablePkgArray,
    GOOGLEADDRESS as googleAddress,
    TCP as tcp,
    HTTP as http,
    BATCH_SYSTEM_SETTINGS_TYPE as systemSettingsType,
    SINGLE_CDS_TYPE as singleCdsType,
    BACTH_CDS_TYPE as batchCdsType,
    ANDROID_SYSTEMSETTING as androidSystemSetting,
    COMPLEXOPTIONS as complexOptions,
    SCREENTIMEOUTOPTIONS as screenTimeoutOptions,
    LOCATIONMODEOPTIONS as locationModeOptions,
    MODELITEM as modelItem,
    MODELITEMINFO as modelItemInfo,
    PROTOCOLTYPE as protocolType,
    DEVICETOPOINFO as deviceTopoInfo,
    DEVICETOPOITEM as deviceTopoItem,
    SYSTEMCONFIGTYPE as systemConfigType, 
    ALERTLOGTYPE as alertLogType,
    TERMINAL as terminal,
    DATAFORWARD as dataForward,
    FUNCTIONID as functionId
}
