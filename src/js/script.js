// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.querySelectorAll('.item-whoweare__text').forEach(item => {
    if (item.innerHTML.length > 28) {
        item.innerHTML = item.innerHTML.slice(0, 29) + '...';
    }
});