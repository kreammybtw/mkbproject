type MkbLogoMarkProps = {
  className?: string;
};

export default function MkbLogoMark({ className = "" }: MkbLogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 79 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mkbLogoBlue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56 14) rotate(132) scale(56)">
          <stop offset="0" stopColor="#10A8D7" />
          <stop offset="0.31" stopColor="#62C5A5" />
          <stop offset="0.58" stopColor="#F49A28" />
          <stop offset="1" stopColor="#DD0A34" />
        </radialGradient>
        <linearGradient id="mkbLogoWarm" x1="5" y1="9" x2="69" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#B7D991" />
          <stop offset="0.38" stopColor="#FFB33A" />
          <stop offset="0.76" stopColor="#F15A24" />
          <stop offset="1" stopColor="#DD0A34" />
        </linearGradient>
      </defs>
      <path
        d="M0 39C0 17.4609 17.728 0 39.364 0C61.001 0 78.729 17.4609 78.729 39C78.729 60.5391 61.001 78 39.364 78C17.728 78 0 60.5391 0 39Z"
        fill="url(#mkbLogoWarm)"
      />
      <path
        d="M0 39C0 17.4609 17.728 0 39.364 0C61.001 0 78.729 17.4609 78.729 39C78.729 60.5391 61.001 78 39.364 78C17.728 78 0 60.5391 0 39Z"
        fill="url(#mkbLogoBlue)"
        opacity="0.82"
      />
      <path
        d="M30.262 39.0001L44.039 25.8384L67.041 25.8783L58.799 34.6127H47.483L30.262 52.1618L11.073 32.6629L17.962 25.8384H30.501L23.866 32.6629L30.262 39.0001Z"
        fill="white"
      />
      <path
        d="M48.467 37.0503H67.655L58.799 45.3372H52.403L45.514 52.1618H33.214L48.467 37.0503Z"
        fill="white"
      />
    </svg>
  );
}
