import { Img } from "nativescript-image";

export function onLoaded(args) {
    let image = args.object as Img;
    if (image.android) {
        const matrix: android.graphics.ColorMatrix = new android.graphics.ColorMatrix();
        matrix.setSaturation(0);
        const filter: android.graphics.ColorMatrixColorFilter = new android.graphics.ColorMatrixColorFilter(
            matrix
        );
        image.android.setColorFilter(filter);
    }
}