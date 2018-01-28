# BEM DESIGN STUB

## Установка
```bash
npm i
```

```bash
export PATH=./node_modules/.bin:$PATH
```

```bash
enb make
```

## Порядок работы с визуалом
  **1 шаг:** блок с нужной темой примиксовывается на верхний уровень бандла;  
  **2 шаг:** в BEMJSON описывается основная структура блока;  
  **3 шаг:** внутрь насыпается содержимое/контент (текст, графика, контролы);  
  **4 шаг:** к узлам блока миксуется паттерн (список, форма, карточка, ...);  
  **5 шаг:** по необходимоси дописываются уникальные стили (к основному блоку);  
  **6 шаг:** блок занимает свое место в обвязке/сетке.  

  Если уникальные стили начинают повторятся, они выносятся на уровень паттернов


## Библиотеки
Все библиотеки делятся на 4 смысловых уровная:
  - тема;
  - контент;
  - паттерн;
  - обвязка.
  

## Тема
- [Документация](http://bem.design/themes.html)
- [Репозиторий](https://github.com/bemdesign/bem-themes)
- [Пакет](https://www.npmjs.com/package/bem-themes)  

```bash
mix : {
    block : 'theme',
    mods : { color : 'default', space : 'default', size : 'default' }
}
```

### Переменные

Переменных не приклеиваются к конкретным значениям, а учитывают интерфейсные состояния блоков и типографики. В переменные вынесены все возможные состояния, этого хватает для того, чтобы покрыть основные интерфейсные потребности.

В стилях любого блока ни один цвета, оступы, размеры (текста) не пишутся руками, используются только переменные. Это делает блок по умолчанию кастомным и готовым к дальнейшим изменениям.

### Декоратор

Декоратор выполняет роль контролируемых (ограниченных) инлайн-стилей, относительно которых еще нет понимания по классификации. Он добавляет косметику, которая нужна для визуальной «подпорки».


## Контент
### Типографика

Для легкой манипуляции внешним видом блоков любой текст в интерфейсе выводится в блоке **text**. Блок **text** имеет модификаторы для цвета, размера, регистра, жирности, межбуквенного интервала. Их можно использовать в различных комбинациях, это помогает получить все необходимые вариации текста.

- [Документация](http://bem.design/typo.html)  
- [Репозиторий](https://github.com/bemdesign/bem-typo)  
- [Пакет](https://www.npmjs.com/package/bem-typo)  

Блок **text** встречается в интерфейсе в двух разных контекстах:


- Внутри смысловых интерфейсных блоков. В этом случае к их элементах мы примиксовываем блок **text** в нужных модификациях. Таким образом мы получаем консистентный типографический визуал не написав ни одной строчки CSS.

```bash
{
	block: 'offer',
	content: [
		...
		{
			elem: 'description',
			mix: {
				block: 'text',
				mods: { size: 'm', view: 'inverse' }
			},
			content: 'Скидка 15% по промослову'
		}
	]
}
```

- Внутри информационных страниц. Здесь **text** является вполне самостоятельным блоком. У которого добавляется еще один модификатор **type** c нужным семантическим значение, для него прописаны относительные отступы, они высчитываются с учетом заложенных типографических рекомендаций. Это позволяет более легко считывать информацию, создавая нужную иерархию.

```bash
{
	block: 'text',
	mods: { 
		size: 'xl', 
		view: 'primary', 
		type: 'h2' 
	},
	content: 'Work with declarations'
},
```



### Иконки

Для отображения иконок используется блок **icon**.

- [Примеры](http://bem.design/icons.html) 
- [Гайд](http://bem.design/article-icons.html)  
- [Репозиторий](https://github.com/bemdesign/bem-icons)  
- [Пакет](https://www.npmjs.com/package/bem-icons)  


## Крупные (маркерные иконки)
- [Документация](http://bem.design/vectors.html)  
- [Репозиторий](https://github.com/bemdesign/bem-vectors)  
- [Пакет](https://www.npmjs.com/package/bem-vectors)  


## Логотипы
- [Документация](http://bem.design/logotypes.html)  
- [Репозиторий](https://github.com/bemdesign/bem-logos)  
- [Пакет](https://www.npmjs.com/package/bem-logos) 

### bem-components
Это [библиотека](https://ru.bem.info/platform/libs/bem-components/6.0.0/) с открытым кодом, которая предоставляет набор готовых визуальных компонентов (блоков). Содержит контролы форм и другие базовые компоненты для построения интерфейсов.


## Паттерны

Все бесконечное многообразие интерфейсных множеств сводится к числу понятных/базовых/фундаментальных конструкций, на основе которых можно получить практически любой визуал.

- [Документация](http://bem.design/patterns.html)  
- [Репозиторий](https://github.com/bemdesign/bem-patterns)  
- [Пакет](https://www.npmjs.com/package/bem-patterns)  


### Таблицы
Паттерн [**.pt-table**](http://bem.design/pt-table.html) используется для представления табличной информации во различных пропорциях, имеет модификации для статусов.

### Списки
Паттерн [**.pt-list**](http://bem.design/pt-list.html) используется для представления вертикально повторяющихся пунктов с любым содержимым.

### Информеры
Паттерн [**.pt-informer**](http://bem.design/pt-informer.html) используется для представления блоков информирующих об успехе/ошибке или предупреждающих/информирующих о чем либо.


### Иконка + Любой блок
Паттерн [**.pt-icon-plus**](http://bem.design/pt-icon-plus.html) используется для представления связки графической и любой другой информации.

### Форма
Паттерн [**.pt-form**](http://bem.design/pt-form.html) используется для представления любой информации требующей ввода данных (или выбора настроек) поользователем для дальнейшей отправки.

### Карточки
Паттерн [**.pt-card**](http://bem.design/pt-card.html) используется для отображения любых модификаций карточной информации.

### Бейджи
Паттерн [**.pt-badge**](http://bem.design/pt-badge.html) используется для отображения статусов.

### Аватар
Паттерн [**.pt-badge**](http://bem.design/pt-avatar.html) используется для отображения фотографий пользователей и может быть дополнен дополнительными элементами, такими как статус или счетчик.



## Шаблоны

Шаблоны позволяют занять смысловым сущностям свое место в интерфейсе.

- [Документация](http://bem.design/layouts.html)  
- [Репозиторий](https://github.com/bemdesign/bem-layouts)  
- [Пакет](https://www.npmjs.com/package/bem-layouts)  

### Обвязка

Блок [**tpl-layout**](https://github.com/bemdesign/bem-layouts/tree/master/common.blocks/tpl-layout) содержит в себе необходимые элементы в различных модификациях для реализации общих обвязок каркаса/проектов.


### Сетка

Блок [**tpl-grid**](https://github.com/bemdesign/bem-layouts/tree/master/common.blocks/tpl-grid) управляет ритмом и композицией (расположением блоков) внутри секций.




