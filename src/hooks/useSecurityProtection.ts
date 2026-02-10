import { useEffect } from 'react';

/**
 * Security protection hook that blocks common inspection methods
 * Note: This is a deterrent, not absolute protection. Determined users can bypass these measures.
 */
export const useSecurityProtection = () => {
  useEffect(() => {
    // Block right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Block common keyboard shortcuts for DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+C (Element inspector)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U (View source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S (Save page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Cmd+Option+I (Mac DevTools)
      if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();
        return false;
      }
      
      // Cmd+Option+J (Mac Console)
      if (e.metaKey && e.altKey && e.key === 'j') {
        e.preventDefault();
        return false;
      }
      
      // Cmd+Option+C (Mac Element inspector)
      if (e.metaKey && e.altKey && e.key === 'c') {
        e.preventDefault();
        return false;
      }
      
      // Cmd+Option+U (Mac View source)
      if (e.metaKey && e.altKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection on specific elements (optional - uncomment if needed)
    // const handleSelectStart = (e: Event) => {
    //   e.preventDefault();
    //   return false;
    // };

    // Disable drag on images
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    // document.addEventListener('selectstart', handleSelectStart);

    // DevTools detection (basic - can be bypassed)
    let devtoolsOpen = false;
    const threshold = 160;
    
    const checkDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if ((widthThreshold || heightThreshold) && !devtoolsOpen) {
        devtoolsOpen = true;
        // You could add custom behavior here, like logging or redirecting
        console.clear();
      } else if (!(widthThreshold || heightThreshold)) {
        devtoolsOpen = false;
      }
    };

    const devToolsInterval = setInterval(checkDevTools, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      // document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(devToolsInterval);
    };
  }, []);
};

export default useSecurityProtection;