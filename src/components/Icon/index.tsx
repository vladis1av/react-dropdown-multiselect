import IconsSVG from '../../assets/svg/svg-sprite.svg';

interface IconProps {
  name: string;
  width: number | string;
  height: number | string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  width,
  height,
  className,
}) => {
  return (
    <svg
      className={`${className}`}
      fill={color}
      stroke={color}
      width={width}
      height={height}>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
};

export default Icon;
