export function Size(){
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
}