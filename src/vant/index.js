// 引入vant
import {
	Button,
	Tabbar, 
	TabbarItem,
	ConfigProvider,
	Icon,
	Search,
	Tab, 
	Tabs,
	Sticky,
	Swipe, 
	SwipeItem,
	Image as VanImage,
	Lazyload,
	Loading,
	NavBar,
	Form, 
	Field, 
	CellGroup,
	Toast,
	Empty,
	SwipeCell,
	Card,
	Radio,
	RadioGroup,
	Checkbox,
	Stepper 

} from 'vant'

export default function(app){
	app.use(Stepper)
	app.use(Checkbox)
	app.use(RadioGroup)
	app.use(Radio)
	app.use(Card)
	app.use(SwipeCell)
	app.use(Empty)
	app.use(Toast)
	app.use(Form)
	app.use(Field)
	app.use(CellGroup)
	app.use(NavBar)
	app.use(Loading)
	app.use(Lazyload)
	app.use(VanImage)
	app.use(Swipe)
	app.use(SwipeItem)
	app.use(Sticky)
	app.use(Tab)
	app.use(Tabs)
	app.use(Search)
	app.use(Icon)
	app.use(ConfigProvider)
	app.use(Tabbar)
	app.use(TabbarItem)
	app.use(Button)
}