// EventTarget subclass

class Emitter extends EventTarget {
    emit(name, detail) {
        this.dispatchEvent(new CustomEvent(name, { detail }));
    }
}

const emitter = new Emitter();
emitter.addEventListener('ping', e => console.log(e.detail));
emitter.emit('ping', { ok: true });
