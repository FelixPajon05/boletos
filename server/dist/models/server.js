"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '3030';
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on ${port, this.portd);
        }, `)
        })
    }
}

export default Server;);
    }
}
