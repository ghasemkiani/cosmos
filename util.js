import {cutil} from "@ghasemkiani/base";
import {Obj} from "@ghasemkiani/base";

class Util extends Obj {
	
}
cutil.extend(Util.prototype, {
	rpc: "https://rpc.one.cosmos-mainnet.polypore.xyz",
});

const util = new Util();

export {Util, util};
