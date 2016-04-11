import viewModule = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
import proxyModule = require("ui/core/proxy");

var PLACEHOLDERIMAGEURI = "placeholderImageUri";
var IMAGEURI = "imageUri";
var FRESCODRAWEE = "FrescoDrawee";
var ACTUALIMAGESCALETYPE = "actualImageScaleType";
var FADEDURATION = "fadeDuration";
var BACKGROUND = "background";

export class FrescoDrawee extends viewModule.View {

    private static imageUriProperty = new dependencyObservable.Property(
        IMAGEURI,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onImageUriPropertyChanged));

    private static placeholderImageUriProperty = new dependencyObservable.Property(
        PLACEHOLDERIMAGEURI,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onPlaceholderImageUriPropertyChanged));

    private static actualImageScaleTypeProperty = new dependencyObservable.Property(
        ACTUALIMAGESCALETYPE,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onActualImageScaleTypePropertyChanged));

    private static fadeDurationProperty = new dependencyObservable.Property(
        FADEDURATION,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onFadeDurationPropertyChanged));

    private static backgroundProperty = new dependencyObservable.Property(
        BACKGROUND,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onBackgroundPropertyChanged));

    get imageUri(): string {
        return this._getValue(FrescoDrawee.imageUriProperty);
    }

    set imageUri(value: string) {
        this._setValue(FrescoDrawee.imageUriProperty, value);
    }

    get placeholderImageUri(): string {
        return this._getValue(FrescoDrawee.placeholderImageUriProperty);
    }

    set placeholderImageUri(value: string) {
        this._setValue(FrescoDrawee.placeholderImageUriProperty, value);
    }

    get actualImageScaleType(): string {
        return this._getValue(FrescoDrawee.actualImageScaleTypeProperty);
    }

    set actualImageScaleType(value: string) {
        this._setValue(FrescoDrawee.actualImageScaleTypeProperty, value);
    }

    get fadeDuration(): number {
        return this._getValue(FrescoDrawee.fadeDurationProperty);
    }

    set fadeDuration(value: number) {
        this._setValue(FrescoDrawee.fadeDurationProperty, value);
    }
    
    get background(): string {
        return this._getValue(FrescoDrawee.backgroundProperty);
    }

    set background(value: string) {
        this._setValue(FrescoDrawee.backgroundProperty, value);
    }

    private static onImageUriPropertyChanged(args) {
        var drawee = args.object;
        drawee.onImageUriChanged(args);
    }

    private static onPlaceholderImageUriPropertyChanged(args) {
        var drawee = args.object;
        drawee.onPlaceholderImageUriPropertyChanged(args);
    }

    private static onActualImageScaleTypePropertyChanged(args) {
        var drawee = args.object;
        drawee.onActualImageScaleTypePropertyChanged(args);
    }

    private static onFadeDurationPropertyChanged(args) {
        var drawee = args.object;
        drawee.onFadeDurationPropertyChanged(args);
    }
    
     private static onBackgroundPropertyChanged(args) {
        var drawee = args.object;
        drawee.onBackgroundPropertyChanged(args);
    }

    protected onImageUriChanged(args) {

    }

    protected onPlaceholderImageUriPropertyChanged(args) {

    }

    protected onActualImageScaleTypePropertyChanged(args) {

    }

    protected onFadeDurationPropertyChanged(args) {

    }
    
    protected onBackgroundPropertyChanged(args) {

    }
}
