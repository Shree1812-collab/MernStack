const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
//1..changing theme
if (settings.theme === "light") {
  settings.theme = "dark";
} else {
  settings.theme = "light";
}
//2.Turn autoSave to true
settings.autoSave = true;
// 3. Remove notifications setting
delete settings.notifications;
// 4. Freeze the settings object
Object.freeze(settings);
// Print final settings
console.log(settings);
