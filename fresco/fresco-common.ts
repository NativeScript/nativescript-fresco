import viewModule = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
import proxyModule = require("ui/core/proxy");

export class FrescoDrawee extends viewModule.View {
    
    private static imageUriProperty = new dependencyObservable.Property(
        "imageUri",
        "FrescoDrawee",
        new proxyModule.PropertyMetadata(
            undefined, 
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onImageUriPropertyChanged));
    
    get imageUri(): string{
        return this.getValue(FrescoDrawee.imageUriProperty);
    }
    
    set imageUri(value: string){
        this.setValue(FrescoDrawee.imageUriProperty, value);
    }
    
    private static onImageUriPropertyChanged(args){
               var drawee = args.object;
        drawee.onImageUriChanged(args);
    }
    
    protected onImageUriChanged(args){
        
    }
}

var FrescoDrawee = (function (_super) {
    __extends(FrescoDrawee, _super);
    function FrescoDrawee() {
        _super.apply(this, arguments);
    }
    FrescoDrawee.onImageUriPropertyChanged = function (args) {
        var drawee = args.object;
        drawee.onImageUriChanged(args);
    };
    FrescoDrawee.prototype.onImageUriChanged = function (args) {
    };
    Object.defineProperty(FrescoDrawee.prototype, "imageUri", {
        get: function () {
            return this._getValue(FrescoDrawee.imageUriProperty);
        },
        set: function (uri) {
            this._setValue(FrescoDrawee.imageUriProperty, uri);
        },
        enumerable: true,
        configurable: true
    });
    FrescoDrawee.imageUriProperty = new dependencyObservable.Property("imageUri", "FrescoDrawee", new proxyModule.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, FrescoDrawee.onImageUriPropertyChanged));
    return FrescoDrawee;
})(view_1.View);
exports.FrescoDrawee = FrescoDrawee;
