import { Bookmark, Link2, Mail } from "lucide-react";
import {
  EVERGREEN_GUIDE_SAVE_ICON,
  EVERGREEN_GUIDE_SHARE_ICON,
} from "@/components/guides/evergreen-guide-icons";

function InstagramIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <rect x="2.5" y="2.5" width="11" height="11" rx="3" />
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="11.5" cy="4.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1.5a6.5 6.5 0 0 0-2.3 12.6c-.03-.5-.06-1.27.04-1.82.07-.4.47-2.55.47-2.55s-.12-.24-.12-.6c0-.56.33-.98.73-.98.35 0 .52.26.52.58 0 .35-.22.88-.34 1.37-.1.41.2.75.6.75.72 0 1.27-.76 1.27-1.86 0-.97-.7-1.65-1.7-1.65-1.16 0-1.84.87-1.84 1.77 0 .35.13.72.3.92.03.04.04.07.03.11l-.12.5c-.04.16-.13.2-.3.12a2.37 2.37 0 0 1-1.24-1.97C4.2 5.5 5.2 4.2 6.95 4.2c1.55 0 2.75 1.1 2.75 2.57 0 1.54-.97 2.78-2.32 2.78-.45 0-.88-.24-1.02-.52l-.28 1.07c-.1.4-.38.9-.56 1.2A6.5 6.5 0 1 0 8 1.5Z" />
    </svg>
  );
}

type Props = {
  saveSub: string;
};

export function EvergreenGuideSaveShare({ saveSub }: Props) {
  return (
    <section className="evergreen-guide__save-share" aria-label="Save and share">
      <div className="evergreen-guide__save-share-card">
        <span className="evergreen-guide__save-share-botanical" aria-hidden>
          <svg viewBox="0 0 80 120" fill="none" stroke="currentColor" strokeWidth="0.9">
            <path d="M40 110V45M40 45c-8-18-22-28-30-32M40 45c8-18 22-28 30-32M40 70c-12-8-20-14-26-22M40 70c12-8 20-14 26-22" />
          </svg>
        </span>

        <div className="evergreen-guide__save-share-half evergreen-guide__save-share-half--save">
          <Bookmark size={18} strokeWidth={1.35} aria-hidden />
          <div className="evergreen-guide__save-share-text">
            <p className="evergreen-guide__save-share-label">Save this guide</p>
            <p className="evergreen-guide__save-share-sub">{saveSub}</p>
          </div>
        </div>

        <div className="evergreen-guide__save-share-divider" aria-hidden />

        <div className="evergreen-guide__save-share-half evergreen-guide__save-share-half--share">
          <p className="evergreen-guide__save-share-label">Share this guide</p>
          <div className="evergreen-guide__save-share-icons">
            <button type="button" className="evergreen-guide__save-share-icon" aria-label="Share on Pinterest">
              <PinterestIcon />
            </button>
            <button type="button" className="evergreen-guide__save-share-icon" aria-label="Share on Instagram">
              <InstagramIcon />
            </button>
            <button type="button" className="evergreen-guide__save-share-icon" aria-label="Share by email">
              <Mail {...EVERGREEN_GUIDE_SHARE_ICON} />
            </button>
            <button type="button" className="evergreen-guide__save-share-icon" aria-label="Copy link">
              <Link2 {...EVERGREEN_GUIDE_SHARE_ICON} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
