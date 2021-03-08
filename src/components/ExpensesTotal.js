import Component from "./Component.js";
import store from "../store/index";

export default class ExpensesTotal extends Component {
	constructor() {
		super({ store, element: document.createElement("h2") });
	}

	render() {
		const total = store.getter("getExpensesTotal");
		this.element.innerText = total;

		return this.element;
	}
}