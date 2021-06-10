import { THEME_COLOR } from '@/theme/index';
import { Box, useColorMode } from '@chakra-ui/react';
import LinkChakra from './link-chakra';

const PathSelecter = () => {
  let Path = (
    <g>
      <path fill="none" d="M0 0h1574v200H0z" />
      <g fillRule="nonzero">
        <path d="M264 4h59l61 192h-53l-12-38h-51l-11 38h-54L264 4zm47 119l-17-68-18 68h35zM515 66l-4-2a126 126 0 00-46-15c-5 0-9 0-12 2-2 1-4 4-4 7s2 6 4 8a1856 1856 0 0162 24c9 5 16 11 21 18 4 7 7 17 7 29 0 11-2 21-7 29-4 8-9 14-16 19-7 4-15 8-24 10s-17 3-26 3a155 155 0 01-58-11c-10-3-18-7-26-11l23-47 5 4a147 147 0 0034 14l22 3c6 0 10 0 12-2 3-1 4-3 4-6 0-4-2-7-6-9l-16-6-21-6c-11-4-20-8-27-13-8-5-13-11-16-17-4-7-6-15-6-24 0-14 4-26 10-36 7-9 16-17 27-22s23-7 35-7c10 0 19 1 27 3a175 175 0 0145 18l-23 43zM648 197a94 94 0 01-70-30 100 100 0 01-27-68 101 101 0 0159-89c12-5 25-7 39-7a94 94 0 0190 62 97 97 0 01-91 132zm-43-97c0 6 1 13 3 19 1 6 4 11 8 16a39 39 0 0033 15c7 0 14-1 20-4 5-3 10-7 13-12 4-5 6-10 8-16a68 68 0 000-37l-8-16c-4-5-8-9-14-12-6-2-12-4-19-4-8 0-14 2-20 5-5 3-10 6-14 11l-8 16-2 19zM923 146c0 12-3 21-9 28-7 8-15 13-25 16-11 4-22 6-35 6h-94V4h111c9 0 17 2 23 7 7 5 12 11 16 18 3 8 5 16 5 24 0 9-2 17-7 26-5 8-11 14-21 18 11 3 20 9 26 17 7 8 10 19 10 32zm-54-10l-1-9-5-6-7-2h-44v32h42c3 0 6 0 8-2l5-5c2-2 2-5 2-8zm-57-88v30h36l7-1 6-5 2-9-2-8-5-5-6-2h-38zM937 4h53v192h-53zM1059 101v95h-52V4h41l77 97V4h52v192h-41l-77-95zM1289 197a94 94 0 01-70-30 100 100 0 01-27-68 101 101 0 0159-89c12-5 25-7 39-7a94 94 0 0190 62 97 97 0 01-91 132zm-43-97c0 6 1 13 3 19 1 6 4 11 8 16a39 39 0 0033 15c7 0 14-1 20-4 5-3 10-7 13-12 4-5 6-10 8-16a68 68 0 000-37l-8-16c-4-5-8-9-14-12-6-2-12-4-19-4-8 0-14 2-20 5-5 3-10 6-14 11l-8 16-2 19zM1452 101v95h-53V4h41l78 97V4h52v192h-42l-76-95z" />
      </g>
      <path
        fill="#ff3f00"
        d="M19 112l-2-12C17 52 59 2 91 2c34 0 73 50 73 98l-2 12c11 5 18 12 18 21 0 32-48 65-89 65-39 0-90-33-90-65 0-9 8-16 18-21zm143 0c-26-12-71-12-71-12-1 0-46 0-72 12 11 36 71 37 72 37 0 0 60-1 71-37zM44 51c-5 5-1 23 6 24 6 1 18-13 18-18-1-6-19-11-24-6zm94 0c4 5 0 23-7 24-6 1-18-13-17-18 0-6 18-11 24-6z"
      />
    </g>
  );

  return Path;
};

const Logo = ({ fill = THEME_COLOR }: { fill?: string }) => {
  const { colorMode } = useColorMode();
  let svgProps = {
    width: 300,
    height: 40,
    viewBox: '0 0 1574 200',
  };

  return (
    <Box area-label="ロゴ" fontWeight="bold" fontSize="1.6rem">
      <LinkChakra href={'/'} display="flex">
        {/* evenoddじゃないと目が欠けてしまう */}
        <svg fillRule="evenodd" {...svgProps}>
          <g fill={colorMode == 'light' ? fill : 'white'}>
            <PathSelecter />
          </g>
        </svg>
      </LinkChakra>
    </Box>
  );
};

export default Logo;
