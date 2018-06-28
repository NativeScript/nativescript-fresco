import { FrescoDrawee } from "nativescript-fresco";

export function onLoaded(args) {
    let drawee = args.object as FrescoDrawee;
    if (drawee.android) {
        const matrix: android.graphics.ColorMatrix = new android.graphics.ColorMatrix();
        matrix.setSaturation(0);
        const filter: android.graphics.ColorMatrixColorFilter = new android.graphics.ColorMatrixColorFilter(
            matrix
        );
        drawee.android.setColorFilter(filter);
    }
}