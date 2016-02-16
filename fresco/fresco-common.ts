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
