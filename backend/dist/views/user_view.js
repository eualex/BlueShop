"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(user, token) {
        return {
            // id: user.id,
            name: user.name,
            email: user.email,
            token
        };
    }
};
