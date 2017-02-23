#r "../../node_modules/fable-core/fable.core.dll"

open Fable.Core

type [<Pojo>] point={x:int ; y:int}

let getData()=
    seq { for i=0 to 30 do yield [|i ; System.Random().Next(100)|]}
    |> Seq.toArray
