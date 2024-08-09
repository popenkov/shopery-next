import SettingsAccount from './SettingsAccount';
import cls from './SettingsPage.module.scss';

export default function SettingsPage() {
  return (
    <div className={cls.SettingsPage}>
      <SettingsAccount />
    </div>
  );
}
