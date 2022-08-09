import {StargateClient} from "@cosmjs/stargate";

import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";
import {util as utilCosmos} from "./util.js";

class Account extends Obj {
	async toInit() {
		if (!this.client) {
			this.client = await StargateClient.connect(this.util.rpc);
		}
	}
	async toGetBalance() {
		await this.toInit();
		let {address} = this;
		let {client} = this;
		let balances = await client.getAllBalances(address);
		let item = balances.find(({denom, amount}) => (denom === "uatom"));
		this.balance = item ? cutil.asNumber(item.amount) * 1e-6 : 0;
		return this.balance;
	}
}
cutil.extend(Account.prototype, {
	util: utilCosmos,
	client: null,
	address: null,
	balance: null,
});

export {Account};
