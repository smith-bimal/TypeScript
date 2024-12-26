function delayedFetch(fn: () => void, time: number) {
    setTimeout(fn, time);
}

delayedFetch(() => {
    console.log('This is a delayed function');
}, 2000);