
const SolutionsRectangle = (props) => (
  <svg
    width={560}
    height={199}
    viewBox="0 0 560 199"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <foreignObject x={-41.5684} y={-41} width={643.068} height={281}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: "blur(25px)",
          clipPath: "url(#bgblur_0_333_245_clip_path)",
          height: "100%",
          width: "100%",
        }}
      />
    </foreignObject>
    <g filter="url(#filter0_di_333_245)" data-figma-bg-blur-radius={50}>
      <path
        d="M61.5211 17.427C65.2715 12.1409 71.3511 9 77.8326 9H531.5C542.546 9 551.5 17.9543 551.5 29V170C551.5 181.046 542.546 190 531.5 190H77.9646C71.4097 190 65.2709 186.788 61.5337 181.403L12.0016 110.03C7.19937 103.11 7.2471 93.9234 12.1209 87.054L61.5211 17.427Z"
        fill="white"
        fillOpacity={0.28}
        shapeRendering="crispEdges"
      />
      <path
        d="M77.833 9.25H531.5C542.408 9.25 551.25 18.0924 551.25 29V170C551.25 180.908 542.408 189.75 531.5 189.75H77.9648C71.6943 189.75 65.8087 186.774 62.0918 181.753L61.7393 181.261L12.207 109.888C7.53903 103.161 7.51163 94.2654 12.1025 87.5186L12.3252 87.1982L61.7246 17.5713C65.4282 12.3513 71.4326 9.25 77.833 9.25Z"
        stroke="#F7F7F7"
        strokeWidth={0.5}
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_333_245"
        x={-41.5684}
        y={-41}
        width={643.068}
        height={281}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_333_245"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_333_245"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6.7} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_333_245"
        />
      </filter>
      <clipPath
        id="bgblur_0_333_245_clip_path"
        transform="translate(41.5684 41)"
      >
        <path d="M61.5211 17.427C65.2715 12.1409 71.3511 9 77.8326 9H531.5C542.546 9 551.5 17.9543 551.5 29V170C551.5 181.046 542.546 190 531.5 190H77.9646C71.4097 190 65.2709 186.788 61.5337 181.403L12.0016 110.03C7.19937 103.11 7.2471 93.9234 12.1209 87.054L61.5211 17.427Z" />
      </clipPath>
    </defs>
  </svg>
);
export default SolutionsRectangle;
