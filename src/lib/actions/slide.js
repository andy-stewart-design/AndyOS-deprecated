export function slide(node, isOpen) {
    let initialHeight = `${node.offsetHeight}px`;
    node.style.height = isOpen ? 'auto' : 0;
    node.style.overflow = 'hidden';

    let animation = node.animate([
        {
            height: 0,
        }, {
            height: initialHeight,
        }
    ], {
        duration: 500,
        fill: 'both',
        direction: isOpen ? 'reverse' : 'normal',
        easing: 'cubic-bezier(0.75, 0, 0.25, 1)'
    });
    animation.pause();

    animation.onfinish = ({ currentTime }) => {
        if (!currentTime) {
            animation.reverse();
            animation.pause();
        }
    }

    return {
        update: () => {
            animation.currentTime ? animation.reverse() : animation.play();
        }
    }
}