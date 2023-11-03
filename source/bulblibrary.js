/*Library with compatible bulb types.

Bulb Type detection:
ESP01_SHDW1C_31
ESP01 -- defines the module family (WiFi only bulb in this case)
DH -- Dual Head light
SH -- Single Head light (most bulbs are single heads) / LED Strip
TW -- Tunable White - can only control CCT and dimming; no color
DW -- Dimmable White (most filament bulbs)
RGB -- Fullstack bulb
1C -- Specific to the hardware - defines PWM frequency + way of controlling CCT temperature
31 -- Related to the hardware revision
*/


import { Exception, WizLightError } from "./exceptions";

export class Features {
	constructor(color, color_tmp, effect, brightness = new Boolean(), dual_head = new Boolean() ) {
		this.color = color;
		this.color_tmp = color_tmp;
		this.effect = effect;	
		this.brightness = brightness;
		this.dual_head = dual_head;
	}
}
export class KelvinRange {
	constructor(max = new Number(), min = new Number()) {
		this.max = max;
		this.min = min;
	}
}
export class BulbClass {
	constructor(type) {
		this.RGB = RGB;
		this.TW = TW;
		this.DW = DW;
		this.SOCKET = SOCKET;
		switch(type) {
			case("RGB"):
				return this.RGB;
			case("TW"):
				return this.TW;
			case("DW"):
				return this.DW;
			case("SOCKET"):
				return this.SOCKET;
		}
	}
	RGB = {
		"brightness": true,
		"color": true,
		"color_tmp": true
	};
	TW = {
		"brightness": true,
		"color": false,
		"color_tmp": true
	};
	DW = {
		"brightness": true,
		"color": false,
		"color_tmp": false
	};
	SOCKET = {
		"brightness": false,
		"color": false,
		"color_tmp": false
	};
}
export class BulbType {
	constructor(name = "", kelvin_min, kelvin_max, bulb_type = "", fw_version = "", white_channels = new Number(), white_to_color_ratio = new Number()) {
		this.features = new Features();
		this.name = name;
		this.kelvin_range = new KelvinRange(kelvin_max, kelvin_min);
		this.bulb_type = new BulbClass(bulb_type);
		this.white_channels = white_channels;
		this.white_to_color_ratio = white_to_color_ratio;
	}
	// to do this shit idk what this is at the moment but ok
	// as_dict(this) {
	//     let dict_this = JSON.parse(this.constructor);
	//     dict_this["bulb_type"]
	// }
	from_data(module_name, kelvin_list, fw_version = "", white_channels = new Number(), white_to_color_ratio = new Number(), type_id = new Number()) {
		let effect;
		let _identifier;
		let dual_head;
		if(module_name) {
			try {
			  _identifier = module_name.split("_")[1];
			} 
			catch(Error) {
				console.log(`The bulb type could not be determined from the module name: ${module_name}`);
				throw Exception.prototype.WizLightNotKnownBulb();
			}
			if(_identifier.includes("RGB")) {
				this.bulb_type = BulbClass.prototype.RGB;
				effect = true;
			}
			else if(_identifier.includes("TW")) {
				this.bulb_type = BulbClass.prototype.TW;
				effect = true;
			}
			else if(_identifier.includes("SOCKET")) {
				this.bulb_type = BulbClass.prototype.SOCKET;
				effect = false;
			}
			else {
				this.bulb_type = BulbClass.prototype.SOCKET;
				if(_identifier.includes("DH")) {
					effect = "DH";
				} else {
					effect = "SH";
				}
			}
			dual_head = "DH";
		} else if(!type_id == undefined) {
			if(!BulbClass.prototype.includes(type_id)) {
				console.warn(`Unknown typeId: ${type_id}, please report what kind of bulb this is at https://github.com/FrimeX/WizJS/issues/new`);
			}
			this.bulb_type = BulbClass.prototype.DW[type_id];
			dual_head = false;
			effect = true;
		} else {
			console.log(`The bulb type could not be determined from the module name: ${module_name}`);
			throw Exception.prototype.WizLightNotKnownBulb();
		}
		if(kelvin_list) {
			this.kelvin_range = KelvinRange(kelvin_list.min, kelvin_list.max);
		}
		else if(BulbClass.prototype.RGB.includes(this.bulb_type) || BulbClass.prototype.TW.includes(this.bulb_type)) {
			console.log(`The bulb type could not be determined from the module name: ${module_name}`);
			throw Exception.prototype.WizLightNotKnownBulb();
		}
		else {
			this.kelvin_range = undefined;
		}
		let features = Features(bulb_type, dual_head, effect);
	}
}
