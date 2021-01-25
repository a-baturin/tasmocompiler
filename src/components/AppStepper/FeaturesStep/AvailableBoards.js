const availableBoards = [
  {
    name: 'esp8266',
    description: 'Generic ESP8266',
    default: true,
    show: true,
    platformio_entries: {
      build_flags: ['${common_build_flags}'],
      lib_extra_dirs: [],
      'board_build.ldscript': '',
      'board_build.f_cpu': '',
    },
    tooltip: 'This is probably bord you have to choose',
    include_features: [],
    defines: {},
  },
  // zbbridge
  {
    name: 'zbbridge',
    description: 'SonOff Zigbee Bridge',
    default: false,
    show: true,
    platformio_entries: {
      build_flags: ['${common_build_flags}'],
      lib_extra_dirs: ['lib/lib_ssl'],
      'board_build.ldscript': 'eagle.flash.2m256.ld',
      'board_build.f_cpu': '160000000L',
    },
    tooltip: 'SonOff Zigbee Bridge',
    include_features: ['USE_ADC_VCC'],
    defines: {
      MODULE: 'SONOFF_ZB_BRIDGE',
      FALLBACK_MODULE: 'SONOFF_ZB_BRIDGE',
      SERIAL_LOG_LEVEL: 'LOG_LEVEL_NONE',
      USE_ARDUINO_OTA: false,
      UPGRADE_V8_MIN: true,
      USE_ZBBRIDGE_TLS: true,
      USE_ENHANCED_GUI_WIFI_SCAN: false,
      USE_ZIGBEE: true,
      USE_ZIGBEE_ZNP: false,
      USE_ZIGBEE_EZSP: true,
      USE_TCP_BRIDGE: true,
    },
  },
  // esp32
  {
    name: 'esp32',
    description: 'Generic ESP32',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: '',
      'board_build.f_cpu': '',
      'board_build.partitions': '',
      build_flags: ['${common32.build_flags}'],
      lib_extra_dirs: [],
    },
    tooltip: '',
    include_features: [],
    defines: {},
  },
  // esp32webcam
  {
    name: 'esp32webcam',
    description: 'ESP32 webcam',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: 'esp32cam',
      'board_build.f_cpu': '240000000L',
      'board_build.partitions': '',
      build_flags: ['${common32.build_flags}'],
      lib_extra_dirs: ['lib/libesp32', 'lib/lib_basic'],
    },
    tooltip: '',
    include_features: [],
    defines: { USE_WEBCAM: true, USE_MI_ESP32: false },
  },
  // esp32odroid-go
  {
    name: 'esp32odroid-go',
    description: 'ESP32 odroid-go',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: 'odroid_esp32',
      'board_build.f_cpu': '240000000L',
      'board_build.partitions': 'esp32_partition_app1984k_spiffs12M.csv',
      build_flags: [
        '${common32.build_flags}',
        '-DBOARD_HAS_PSRAM',
        '-mfix-esp32-psram-cache-issue',
      ],
      lib_extra_dirs: [
        'lib/libesp32',
        'lib/lib_basic',
        'lib/lib_i2c',
        'lib/lib_rf',
        'lib/lib_div',
        'lib/lib_ssl',
        'lib/lib_display',
      ],
    },
    tooltip: '',
    include_features: ['displays'],
    defines: {
      MODULE: 'ODROID_GO',
      FALLBACK_MODULE: 'ODROID_GO',
      USE_ODROID_GO: true,
      USE_UFILESYS: true,
      USE_SDCARD: true,
      GUI_TRASH_FILE: true,
      USE_ADC: true,
      USE_BLE_ESP32: true,
      USE_MI_ESP32: true,
    },
  },
  // esp32m5
  {
    name: 'esp32m5',
    description: 'ESP32 M5Stack Core2',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: 'm5stack-grey',
      'board_build.f_cpu': '240000000L',
      'board_build.partitions': 'esp32_partition_app1984k_spiffs12M.csv',
      build_flags: [
        '${common32.build_flags}',
        '-DDBOARD_HAS_PSRAM',
        '-mfix-esp32-psram-cache-issue',
      ],
      lib_extra_dirs: [
        'lib/libesp32',
        'lib/lib_basic',
        'lib/lib_i2c',
        'lib/lib_rf',
        'lib/lib_div',
        'lib/lib_ssl',
        'lib/lib_display',
        'lib/lib_audio',
      ],
    },
    tooltip: '',
    include_features: ['displays'],
    defines: {
      MODUEL: 'M5STACK_CORE2',
      FALLBACK_MODULE: 'M5STACK_CORE2',
      USE_M5STACK_CORE2: true,
      SAY_TIME: true,
      USE_WEBRADIO: true,
      USE_MPU6886: true,
      USE_UFILESYS: true,
      USE_SDCARD: true,
      GUI_TRASH_FILE: true,
      USE_BMA423: true,
      JPEG_PICTS: true,
      USE_FT5206: true,
      USE_TOUCH_BUTTONS: true,
      MAX_TOUCH_BUTTONS: 16,
      USE_SENDMAIL: true,
      USE_ESP32MAIL: true,
    },
  },
];

export default availableBoards;
