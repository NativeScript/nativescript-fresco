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

    // TODO change this from string to enum
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
}