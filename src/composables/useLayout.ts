import { ref } from 'vue';
import { SocialProfile, SocialProfilesList } from '@/store/modules/dao/types';

const chartViewDif = ref(false);

export function useLayout() {
  const setChartViewDif = () => {
    chartViewDif.value = !chartViewDif.value;
  };

  const getLabelLink = (url: string, short?: boolean) => {
    if (!url) {
      return null;
    } else {
      const link = new URL(url).hostname.replace(/^www\./, '');
      return short ? link.split('.')[0] : link;
    }
  };

  const ellipsisText = (string: string, length?: number) => {
    if (!length) {
      return string ? string : null;
    } else {
      return string.slice(0, length) + '...' + string.slice(-4);
    }
  };

  const copyToClipboard = (data: string) => {
    void navigator.clipboard.writeText(data);
  };

  const getSocialLinksByName = (arr: SocialProfile[]) => {
    return arr.filter((item) => {
      return (
        item.socialType === SocialProfilesList.TWITTER ||
        item.socialType === SocialProfilesList.TELEGRAM ||
        item.socialType === SocialProfilesList.REDDIT ||
        item.socialType === SocialProfilesList.DISCORD ||
        item.socialType === SocialProfilesList.YOUTUBE
      );
    });
  };

  const getLinkByName = (arr: SocialProfile[], name: SocialProfilesList) => {
    return arr.find((item) => item.socialType === name);
  };

  const getLabelPercent = (value: number) => {
    return value < 0 ? `${value}%` : `+${value}%`;
  };

  const setDraggableX = (el: HTMLElement, unset: boolean) => {
    let isMouseDown = false;
    let startX = 0;
    let scrollX = 0;

    if (el) {
      const onMouseDown = (e: MouseEvent): void => {
        if (el) {
          isMouseDown = true;
          startX = e.pageX - el.offsetLeft;
          scrollX = el.scrollLeft;
        }
      };
      const onMouseMove = (e: MouseEvent): void => {
        if (!isMouseDown) return;
        e.preventDefault();
        if (el) el.scrollLeft = scrollX - (e.clientX - el.offsetLeft - startX);
      };
      const onMouseUp = () => {
        isMouseDown = false;
      };

      if (!unset) {
        el.addEventListener('mousedown', onMouseDown);
        el.addEventListener('mouseleave', onMouseUp);
        el.addEventListener('mouseup', onMouseUp);
        el.addEventListener('mousemove', onMouseMove);
      } else {
        el?.removeEventListener('mousedown', onMouseDown);
        el?.removeEventListener('mousemove', onMouseMove);
        el?.removeEventListener('mouseleave', onMouseUp);
        el?.removeEventListener('mouseup', onMouseUp);
      }
    }
  };

  return {
    chartViewDif,
    setChartViewDif,
    getLabelLink,
    ellipsisText,
    copyToClipboard,
    getSocialLinksByName,
    getLinkByName,
    getLabelPercent,
    setDraggableX,
  };
}
