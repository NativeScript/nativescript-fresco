/// <reference path="references.d.ts" />

import viewModule = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
import proxyModule = require("ui/core/proxy");

var PLACEHOLDERIMAGEURI = "placeholderImageUri";
var IMAGEURI = "imageUri";
var FRESCODRAWEE = "FrescoDrawee";
var ACTUALIMAGESCALETYPE = "actualImageScaleType";
var FADEDURATION = "fadeDuration";
var BACKGROUNDURI = "backgroundUri";
var PROGRESSIVERENDERINGENABLED = "progressiveRenderingEnabled";
var SHOWPROGRESSBAR = "showProgressBar";
var PROGRESSBARCOLOR = "progressBarColor";
var FAILUREIMAGEURI = "failureImageUri";
var ROUNDASCIRCLE = "roundAsCircle";
var ROUNDTOPLEFT = "roundTopLeft";
var ROUNDTOPRIGHT = "roundTopRight";
var ROUNDBOTTOMLEFT = "roundBottomLeft";
var ROUNDBOTTOMRIGHT = "roundBottomRight";
var ROUNDEDCORNERRADIUS = "roundedCornerRadius";

export module ScaleType {
    export var Center = "center";
    export var CenterCrop = "centerCrop";
    export var CenterInside = "centerInside";
    export var FitCenter = "fitCenter";
    export var FitEnd = "fitEnd";
    export var FitStart = "fitStart";
    export var FitXY = "fitXY";
    export var FocusCrop = "focusCrop";
}

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

    private static failureImageUriProperty = new dependencyObservable.Property(
        FAILUREIMAGEURI,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onFailureImageUriPropertyChanged));

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

    private static backgroundUriProperty = new dependencyObservable.Property(
        BACKGROUNDURI,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onBackgroundUriPropertyChanged));

    private static progressiveRenderingEnabledProperty = new dependencyObservable.Property(
        PROGRESSIVERENDERINGENABLED,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onProgressiveRenderingEnabledPropertyChanged));

    private static showProgressBarProperty = new dependencyObservable.Property(
        SHOWPROGRESSBAR,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onShowProgressBarPropertyChanged));

    private static progressBarColorProperty = new dependencyObservable.Property(
        PROGRESSBARCOLOR,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onProgressBarColorPropertyChanged));

    private static roundAsCircleProperty = new dependencyObservable.Property(
        ROUNDASCIRCLE,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onRoundAsCirclePropertyChanged));

    private static roundTopLeftProperty = new dependencyObservable.Property(
        ROUNDTOPLEFT,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onRoundTopLeftPropertyChanged));

    private static roundTopRightProperty = new dependencyObservable.Property(
        ROUNDTOPRIGHT,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onRoundTopRightPropertyChanged));

    private static roundBottomLeftroperty = new dependencyObservable.Property(
        ROUNDBOTTOMLEFT,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onRoundBottomLeftPropertyChanged));

    private static roundBottomRightProperty = new dependencyObservable.Property(
        ROUNDBOTTOMRIGHT,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onRoundBottomRightPropertyChanged));

    private static roundedCornerRadiusProperty = new dependencyObservable.Property(
        ROUNDEDCORNERRADIUS,
        FRESCODRAWEE,
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onRoundedCornerRadiusPropertyChanged));

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

    get failureImageUri(): string {
        return this._getValue(FrescoDrawee.failureImageUriProperty);
    }

    set failureImageUri(value: string) {
        this._setValue(FrescoDrawee.failureImageUriProperty, value);
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

    get backgroundUri(): string {
        return this._getValue(FrescoDrawee.backgroundUriProperty);
    }

    set backgroundUri(value: string) {
        this._setValue(FrescoDrawee.backgroundUriProperty, value);
    }

    get progressiveRenderingEnabled(): boolean {
        return this._getValue(FrescoDrawee.progressiveRenderingEnabledProperty);
    }

    set progressiveRenderingEnabled(value: boolean) {
        this._setValue(FrescoDrawee.progressiveRenderingEnabledProperty, value);
    }

    get showProgressBar(): boolean {
        return this._getValue(FrescoDrawee.showProgressBarProperty);
    }

    set showProgressBar(value: boolean) {
        this._setValue(FrescoDrawee.showProgressBarProperty, value);
    }

    get progressBarColor(): string {
        return this._getValue(FrescoDrawee.progressBarColorProperty);
    }

    set progressBarColor(value: string) {
        this._setValue(FrescoDrawee.progressBarColorProperty, value);
    }

    get roundAsCircle(): boolean {
        return this._getValue(FrescoDrawee.roundAsCircleProperty);
    }

    set roundAsCircle(value: boolean) {
        this._setValue(FrescoDrawee.roundAsCircleProperty, value);
    }

    get roundBottomRight(): boolean {
        return this._getValue(FrescoDrawee.roundBottomRightProperty);
    }

    set roundBottomRight(value: boolean) {
        this._setValue(FrescoDrawee.roundBottomRightProperty, value);
    }

    get roundTopLeft(): boolean {
        return this._getValue(FrescoDrawee.roundTopLeftProperty);
    }

    set roundTopLeft(value: boolean) {
        this._setValue(FrescoDrawee.roundTopLeftProperty, value);
    }

    get roundTopRight(): boolean {
        return this._getValue(FrescoDrawee.roundTopRightProperty);
    }

    set roundTopRight(value: boolean) {
        this._setValue(FrescoDrawee.roundTopRightProperty, value);
    }

    get roundBottomLeft(): boolean {
        return this._getValue(FrescoDrawee.roundBottomLeftroperty);
    }

    set roundBottomLeft(value: boolean) {
        this._setValue(FrescoDrawee.roundBottomLeftroperty, value);
    }

    get roundedCornerRadius(): number {
        return this._getValue(FrescoDrawee.roundedCornerRadiusProperty);
    }

    set roundedCornerRadius(value: number) {
        this._setValue(FrescoDrawee.roundedCornerRadiusProperty, value);
    }

    private static onImageUriPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onImageUriChanged(args);
    }

    private static onPlaceholderImageUriPropertyChanged(args) {
        var drawee = args.object;
        drawee.onPlaceholderImageUriChanged(args);
    }

    private static onFailureImageUriPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onFailureImageUriChanged(args);
    }

    private static onActualImageScaleTypePropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onActualImageScaleTypeChanged(args);
    }

    private static onFadeDurationPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onFadeDurationChanged(args);
    }

    private static onBackgroundUriPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onBackgroundUriChanged(args);
    }

    private static onProgressiveRenderingEnabledPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onProgressiveRenderingEnabledChanged(args);
    }

    private static onShowProgressBarPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onShowProgressBarChanged(args);
    }

    private static onProgressBarColorPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onProgressBarColorChanged(args);
    }

    private static onRoundAsCirclePropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onRoundAsCircleChanged(args);
    }

    private static onRoundTopLeftPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onRoundTopLeftChanged(args);
    }

    private static onRoundTopRightPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onRoundTopRightChanged(args);
    }

    private static onRoundBottomLeftPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onRoundBottomLeftrChanged(args);
    }

    private static onRoundBottomRightPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onRoundBottomRightChanged(args);
    }

    private static onRoundedCornerRadiusPropertyChanged(args) {
        var drawee: FrescoDrawee = args.object;
        drawee.onRoundedCornerRadiusChanged(args);
    }

    protected onImageUriChanged(args) {

    }

    protected onPlaceholderImageUriChanged(args) {

    }

    protected onFailureImageUriChanged(args) {

    }

    protected onActualImageScaleTypeChanged(args) {

    }

    protected onFadeDurationChanged(args) {

    }

    protected onBackgroundUriChanged(args) {

    }

    protected onProgressiveRenderingEnabledChanged(args) {

    }

    protected onShowProgressBarChanged(args) {

    }

    protected onProgressBarColorChanged(args) {

    }

    protected onRoundAsCircleChanged(args) {

    }

    protected onRoundTopLeftChanged(args) {

    }

    protected onRoundTopRightChanged(args) {

    }

    protected onRoundBottomLeftrChanged(args) {

    }

    protected onRoundBottomRightChanged(args) {

    }

    protected onRoundedCornerRadiusChanged(args) {

    }
}