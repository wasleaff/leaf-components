import { RefObject, useEffect } from "react";
//在 React 组件中监听点击事件，并在点击事件发生在组件外部时执行指定的回调函数。
function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      //2.ref不包含点击的target说明，该target在组件外，可以执行对应的回调函数
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    //1.document监听点击事件
    document.addEventListener("click", listener);
    //返回一个清理函数，用于在组件卸载时移除监听器，以避免内存泄漏
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
