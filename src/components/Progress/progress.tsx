import React, { FC } from "react";
// import { ThemeProps } from '../Icon/icon'
export interface ProgressProps {
  /**
   * The progress percentage is displayed
   */
  percent: number;
  /**
   * Customize the progress bar height
   */
  strokeHeight?: number;
  /**
   * Whether to display text for percentage of progress bar?
   */
  showText?: boolean;
  /**
   * Want to add an extra style to the progress bar?
   */
  styles?: React.CSSProperties;
  // theme?: ThemeProps;
}

export const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    // theme,
  } = props;
  return (
    <div className="leaf-progress-bar" style={styles} data-testid="progress">
      <div
        className="leaf-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          // className={`leaf-progress-bar-inner color-${theme}`}
          className={`leaf-progress-bar-inner color-primary`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  // theme: "primary",
};
export default Progress;
