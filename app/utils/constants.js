import path from 'path';

const { app } = require('electron').remote;
// throws error as it would be packed into main.js where this is can not be required
// tried it again and it seems to work, lets see

export const SHEET_FIT = {
  WIDTH: 'width',
  HEIGHT: 'height',
  BOTH: 'both',
  NOSCALE: 'noScale',
};

export const SHEET_TYPE = {
  INTERVAL: 'interval',
  SCENES: 'scenes',
};

export const SHEET_TYPE_OPTIONS = [
  { value: SHEET_TYPE.INTERVAL, text: 'Interval' , 'data-tid': 'sheetTypeOptionsInterval'},
  { value: SHEET_TYPE.SCENES, text: 'Scenes' , 'data-tid': 'sheetTypeOptionsScenes'},
];

export const SHEETVIEW = {
  GRIDVIEW: 'gridView',
  TIMELINEVIEW: 'timelineView',
};

export const VIEW = {
  PLAYERVIEW: 'playerView',
  STANDARDVIEW: 'standardView',
};

export const MOVIEPRINT_COLORS = [
  '#FF5006',
  '#FFb709',
  '#FF9365',
  '#FFa883',
  '#FFd3c1',
];

export const PAPER_LAYOUT_OPTIONS = [
  { value: 0.71, text: 'A0-A5 (Landscape)' , 'data-tid': 'A0-A5-L'},
  { value: 1.41, text: 'A0-A5 (Portrait)' , 'data-tid': 'A0-A5-P'},
  { value: 0.77, text: 'Letter (Landscape)' , 'data-tid': 'Letter-L'},
  { value: 1.29, text: 'Letter (Portrait)' , 'data-tid': 'Letter-P'},
  { value: 0.61, text: 'Legal (Landscape)' , 'data-tid': 'Legal-L'},
  { value: 1.65, text: 'Legal (Portrait)' , 'data-tid': 'Legal-P'},
  { value: 0.65, text: 'Tabloid (Landscape)' , 'data-tid': 'Tabloid-L'},
  { value: 1.55, text: 'Tabloid (Portrait)' , 'data-tid': 'Tabloid-P'},
  { value: 1.00, text: 'Square' , 'data-tid': 'Square'},
];

export const OUTPUT_FORMAT_OPTIONS = [
  { value: 'png', text: 'PNG', 'data-tid': 'pngOption' },
  { value: 'jpg', text: 'JPG', 'data-tid': 'jpgOption' },
];

export const CACHED_FRAMES_SIZE_OPTIONS = [
  { value: 0, text: 'Original size', 'data-tid': 'originalSizeOption' }, // 0 stands for original size
  { value: 80, text: '80px', 'data-tid': '80option' },
  { value: 160, text: '160px', 'data-tid': '160option' },
  { value: 320, text: '320px', 'data-tid': '320option' },
  { value: 640, text: '640px', 'data-tid': '640option' },
  { value: 720, text: '720px', 'data-tid': '720option' },
];

// start initialStateJSON
export const VISIBILITY_FILTER = 'SHOW_VISIBLE';
export const SHOW_MOVIELIST = false;
export const SHOW_SETTINGS = false;
export const DEFAULT_VIEW = VIEW.STANDARDVIEW
export const DEFAULT_SHEETVIEW = SHEETVIEW.GRIDVIEW;
export const DEFAULT_SHEET_TYPE = SHEET_TYPE.INTERVAL;
export const SH = SHEET_FIT.BOTH;

export const DEFAULT_THUMB_COUNT_MAX = 10000;
export const DEFAULT_THUMB_COUNT = 16;
export const DEFAULT_COLUMN_COUNT = 4;
export const DEFAULT_THUMBNAIL_SCALE = 0.25;
export const DEFAULT_MOVIEPRINT_WIDTH = 4096;
export const DEFAULT_MARGIN_RATIO = 0.02;
export const DEFAULT_MARGIN_SLIDER_FACTOR = 200.0;
export const DEFAULT_BORDER_RADIUS_RATIO = 0.04;
export const DEFAULT_HEADER_HEIGHT_RATIO = 0.25;
export const DEFAULT_SHOW_HEADER = false;
export const DEFAULT_SHOW_PATH_IN_HEADER = true;
export const DEFAULT_SHOW_DETAILS_IN_HEADER = true;
export const DEFAULT_SHOW_TIMELINE_IN_HEADER = true;
export const DEFAULT_ROUNDED_CORNERS = true;
export const DEFAULT_THUMB_INFO = 'hideInfo';
export const DEFAULT_THUMB_INFO_RATIO = 0.075;
// export const DEFAULT_OUTPUT_PATH = app.getPath('desktop'); // throws error see above
export const DEFAULT_OUTPUT_PATH_FROM_MOVIE = false;
export const DEFAULT_OUTPUT_FORMAT = 'png';
export const DEFAULT_SAVE_OPTION_OVERWRITE = false;
export const DEFAULT_SAVE_OPTION_INCLUDE_INDIVIDUAL = false;
export const DEFAULT_VIDEO_PLAYER_HEIGHT = 360;
export const DEFAULT_VIDEO_PLAYER_WIDTH = 640;
export const DEFAULT_VIDEO_PLAYER_CONTROLLER_HEIGHT = 64;
export const DEFAULT_BORDER_MARGIN = 24;
export const DEFAULT_SHOW_PAPER_PREVIEW = false;
export const DEFAULT_PAPER_ASPECTRATIOINV = 0.71;
export const DEFAULT_DETECT_INOUTPOINT = false;
export const DEFAULT_SCRUB_CONTAINER_MAXHEIGHTRATIO = 0.8;
export const DEFAULT_SCRUB_WINDOW_WIDTHRATIO = 0.5;
export const DEFAULT_SCRUB_WINDOW_HEIGHTRATIO = 0.5;
export const DEFAULT_SCRUB_WINDOW_MARGIN = 2;
export const DEFAULT_SCENE_DETECTION_THRESHOLD = 20.0;
export const DEFAULT_TIMELINEVIEW_SECONDS_PER_ROW = 120.0;
export const DEFAULT_TIMELINEVIEW_MIN_DISPLAY_SCENE_LENGTH_IN_FRAMES = 15;
export const DEFAULT_TIMELINEVIEW_WIDTH_SCALE = 50;
export const DEFAULT_TIMELINEVIEW_FLOW = false;
export const DEFAULT_CACHED_FRAMES_SIZE = 640; // 0 stands for original size
export const DEFAULT_EMBED_FRAMENUMBERS = true;
export const DEFAULT_EMBED_FILEPATH = true;
// end initialStateJSON

export const MENU_HEADER_HEIGHT = 35;
export const MENU_FOOTER_HEIGHT = 35;

export const ZOOM_SCALE = 2;
export const PAPER_ADJUSTMENT_SCALE = 0.9;
export const MARGIN_ADJUSTMENT_SCALE = 0.95;

export const DEFAULT_MOVIE_WIDTH = 1920;
export const DEFAULT_MOVIE_HEIGHT = 1080;
export const DEFAULT_MOVIE_ASPECTRATIO = 1.778;

// fixes jumping of thumbs due to hoverButton by giving the moviePrint some extra space around
// should be 0 for printing
export const DEFAULT_MIN_MOVIEPRINTWIDTH_MARGIN = 10;

export const MINIMUM_WIDTH_TO_SHRINK_HOVER = 160; // if smaller then scale hover to 0.7
export const MINIMUM_WIDTH_TO_SHOW_HOVER = 100; // if smaller then do not show hover elements over thumb
export const MINIMUM_WIDTH_OF_CUTWIDTH_ON_TIMELINE = 2; // heightOfInOutPointButtons

export const CHANGE_THUMB_STEP = [1, 10, 100];

export const IN_OUT_POINT_SEARCH_LENGTH = 300;
export const IN_OUT_POINT_SEARCH_THRESHOLD = 20; // previous 15

export const SCENE_DETECTION_MIN_SCENE_LENGTH = 15; // for scene detection

export const DEFAULT_FRAME_SCALE = 1; // scale of frames to be stored in the database if 1 then original size is stored

export const FRAMESDB_PATH = path.join(app.getPath('userData'), 'moviePrint_frames.db');

export const STATEID = '1';
