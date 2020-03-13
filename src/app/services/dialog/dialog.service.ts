import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type } from '@angular/core';
import { Dialog } from '@models/dialog';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private childComponentRef: ComponentRef<any>;
    private readonly dialogElementId = 'dialog-container';
    private readonly overlayElementId = 'overlay-container';

    constructor(
        private resolver: ComponentFactoryResolver, // 工厂解析器，用于得到任何工厂（Angular里的任何一个组件都是通过工厂造出来的）
        private appRef: ApplicationRef, // Angular APP的引用
        private injector: Injector, // 注入器
        @Inject(DOCUMENT) private document: Document // 相当于document文档对象模型
    ) { }


    // 增加组件
    public appendComponentTo(parendId: string, child: Type<any>, config: Dialog): void {
        // 通过工厂解析器得到创建组件的工厂，通过工厂创建一个带有注入器（组件有依赖注入的服务等等）创建出组件
        const childComponentRef = this.resolver.resolveComponentFactory(child).create(this.injector);
        // 动态设置属性给组件
        this.attachConfig(config , childComponentRef);
        // 保存组件引用以便用于移除组件
        this.childComponentRef = childComponentRef;
        // 通过APP引用将组件插入Tree（视图树）
        this.appRef.attachView(childComponentRef.hostView);
        // 得到DOM对象
        const childDomElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        // 插入到正确的位置
        this.document.getElementById(parendId).appendChild(childDomElement);
    }

    // 移除组件
    public removeComponent(): void {
        this.appRef.detachView(this.childComponentRef.hostView);
    }

    // 动态设置属性给组件
    public attachConfig(config: Dialog, componentRef: ComponentRef<any>): void {
        const inputs = config.inputs;
        const outputs = config.outputs;
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                // 得到组件的实例对象，设置输入属性
                componentRef.instance[key] = element;
            }
        }
        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                // 得到组件的实例对象，设置输出属性
                componentRef.instance[key] = element;
            }
        }
    }

    // 打开对话框
    public openDialog(component: Type<any>, config: Dialog): void {
        this.appendComponentTo(this.dialogElementId, component, config);
        this.toggleAll();
    }

    public toggleAll(): void {
        this.toggleVisibilty(this.document.getElementById(this.dialogElementId));
        this.toggleVisibilty(this.document.getElementById(this.overlayElementId));
    }

    // 切换overlay
    public toggleVisibilty(element: HTMLElement): void {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hidden');
            return;
        }
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }

    // 关闭对话框
    public closeDialog(): void {
        this.removeComponent();
        this.toggleAll();
    }

}
